import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { TaskListContextProvider } from './contexts/useTaskFormContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TaskListContextProvider>
    <App />
  </TaskListContextProvider>
)
