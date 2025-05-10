# My Todo App

A modern, responsive Todo application built with React, Vite, and Supabase. This application allows users to manage their tasks efficiently with real-time updates and data persistence.

## Features

- ✨ Create, read, update, and delete todos
- 🔄 Real-time updates using Supabase
- 🎨 Modern and responsive UI
- ⚡ Lightning-fast performance with Vite
- 🔒 Secure data storage

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A Supabase account and project

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-todo-app.git
   cd my-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Supabase](https://supabase.com/) - Backend as a Service
- [TypeScript](https://www.typescriptlang.org/) - Type checking and enhanced developer experience
- [ESLint](https://eslint.org/) - Code quality and consistency

## Project Structure

```
my-todo-app/
├── public/           # Static assets
├── src/
│   ├── assets/      # Images, fonts, and other assets
│   ├── components/  # React components
│   └── lib/         # Utility functions and configurations
├── .env             # Environment variables
├── .env.example     # Example environment variables
└── vite.config.js   # Vite configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the excellent build tool
- [Supabase](https://supabase.com/) for the backend infrastructure
- [React](https://reactjs.org/) for the UI framework
