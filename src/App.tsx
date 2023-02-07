import { useState } from "react"
import Header from "./components/Header"
import Task from "./components/Task"

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

function App() {

const [tasks, setTasks] = useState<ITask[]>([])

function addTask(taskContent: string) {
  setTasks([
    ...tasks,
    {
      id: crypto.randomUUID(),
      content: taskContent,
      isCompleted: false,
    }
  ]);
}

function deleteTaskId(taskId: string) {
  const newTasks = tasks.filter((task) => task.id !== taskId)
  setTasks(newTasks)
}

function toggleTaskById(taskId: string) {
  const newTasks = tasks.map(task => {
    if(task.id === taskId) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
    return(task)
  })
  setTasks(newTasks)
}

  return (
    <>
      <Header onAddTask = {addTask}/> 
      <Task tasks = {tasks} 
      onDelete={deleteTaskId} 
      onComplete = {toggleTaskById}/>
    </>
  )
}

export default App
