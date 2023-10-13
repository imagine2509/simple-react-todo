import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header/Header'
import TaskList from '../components/Main/TaskList'

function App() {
  return (
    <div className='bg-body-tertiary'>
      <Header />
      <TaskList />
    </div>
  )
}

export default App
