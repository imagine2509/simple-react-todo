import { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { TaskListContext } from '../../contexts/useTaskFormContext'
import Task from './Task'

const TaskList = () => {
  const { taskList } = useContext(TaskListContext)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Text</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </Table>
  )
}

export default TaskList
