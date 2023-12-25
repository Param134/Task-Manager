import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, updateTask, deleteTask, toggleTask, setFilter } from './actions/index'

function App() {
  const taskList = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  console.log("task list ", taskList )

  return (
    <>
      <p>Check</p>
    </>
  )
}

export default App
