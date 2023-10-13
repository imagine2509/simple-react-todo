import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { TaskType } from '../../contexts/useTaskFormContext'
import { TaskListContext } from '../../contexts/useTaskFormContext'

type TaskProps = {
  task: TaskType
}

const Task = (props: TaskProps) => {
  const { task } = props
  const { taskList, onSave } = useContext(TaskListContext)
  const [taskStatus, setTaskStatus] = useState(task.status)

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.checked
    setTaskStatus(newStatus)
    const updatedTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, status: newStatus }
      } else {
        return t
      }
    })
    onSave(updatedTaskList)
  }

  const handleDeleteButton = () => {
    const updatedTaskList = taskList.filter((t) => t.id !== task.id)
    onSave(updatedTaskList)
  }

  return (
    <tr>
      <td>{task.id}</td>
      <td>
        <input
          type='checkbox'
          checked={taskStatus}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>{task.text}</td>
      <td>
        <Button
          type='button'
          onClick={handleDeleteButton}
          variant='outline-secondary'
          id='button-addon2'>
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default Task
