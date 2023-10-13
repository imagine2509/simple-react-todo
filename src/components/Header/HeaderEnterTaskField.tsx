import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { TaskListContext, TaskType } from '../../contexts/useTaskFormContext'
import { ChangeEvent, useContext, useState } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage'

const taskInitState: TaskType = {
  text: '',
  status: false,
  id: 0,
}

function TaskForm() {
  const { taskList, onSave } = useContext(TaskListContext)
  const [formData, setFormData] = useState<TaskType>(taskInitState)
  const [, writeToLS] = useLocalStorage<TaskType[]>('task')

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const newData = { ...formData, id: taskList.length + 1 }
    const updatedTaskList = [...taskList, newData]
    onSave(updatedTaskList)
    writeToLS(updatedTaskList)
  }

  return (
    <Form onSubmit={onSubmit} className='mb-3'>
      <InputGroup>
        <Form.Control
          placeholder='Enter task'
          name='text'
          aria-label='Task'
          aria-describedby='basic-addon2'
          onChange={onChange}
        />
        <Button variant='outline-secondary' id='button-addon2' type='submit'>
          Create Task
        </Button>
      </InputGroup>
    </Form>
  )
}

export default TaskForm
