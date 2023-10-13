import { FC, ReactNode, createContext, useState } from 'react'

export type TaskType = {
  text: string
  status: boolean
  id: number | string
}

type TaskListContextType = {
  taskList: TaskType[]
  onSave: (data: TaskType[]) => void
}
type TaskListProps = {
  children: ReactNode
}

const TaskListInitState: TaskListContextType = {
  taskList: [],
  onSave: () => {},
}

export const TaskListContext =
  createContext<TaskListContextType>(TaskListInitState)

export const TaskListContextProvider: FC<TaskListProps> = ({ children }) => {
  const [taskList, setTaskList] = useState<TaskType[]>([])
  const onSave = (data: TaskType[]): void => {
    setTaskList(data)
  }
  return (
    <TaskListContext.Provider value={{ taskList, onSave }}>
      {children}
    </TaskListContext.Provider>
  )
}
