import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './components/Tasks'
import { useSelector } from "react-redux";
import { isEmpty } from "./components/Utils";
import AddTasks from './components/AddTasks'

function App() {
  const tasks = useSelector((state) => state.taskReducer);
  const taskFormat = Array.from(tasks);
  // {taskFormat.map((taskData,index) => {
    console.log(tasks)
  // })}
  return (
    <>
    <h2>My To Do List</h2>
    <div  >
        <AddTasks />
        {isEmpty(tasks)?<div>Loading.....</div>:""}
    </div>{!isEmpty(tasks) && isEmpty(tasks)?<div>
      <p> No Task</p>
    </div>:""}
    {!isEmpty(tasks) && taskFormat.map((taskData,index) => (
      <Tasks task = {taskData} />
    ))}
      
    </>
  )
}

export default App
