import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTodos();

    const taskChannel = supabase
      .channel("tasks-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "todos" },
        (payload) => {
          setTodos((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(taskChannel);
    };
  }, []);

  async function fetchTodos() {
    const { data, error } = await supabase.from("todos").select("*");
    if (!error) setTodos(data);
  }

  async function addTodo() {
    if (!newTask.trim()) return;
    const { error } = await supabase.from("todos").insert([{ task: newTask }]);
    if (!error) {
      setNewTask("");
      fetchTodos();
    }
  }

  async function toggleComplete(id, currentStatus) {
    const { error } = await supabase
      .from("todos")
      .update({ is_complete: !currentStatus })
      .eq("id", id);
    if (!error) fetchTodos();
  }

  async function deleteTodo(id) {
    const { error } = await supabase.from("todos").delete().eq("id", id);
    if (!error) fetchTodos();
  }

  return (
    <div className="todo-container">
      <h2 className="todo-header">My To-Do List</h2>
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button className="add-button" onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.is_complete || false}
              onChange={() => toggleComplete(todo.id, todo.is_complete)}
            />
            <span className={`todo-text ${todo.is_complete ? 'completed' : ''}`}>
              {todo.task}
            </span>
            <button 
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
