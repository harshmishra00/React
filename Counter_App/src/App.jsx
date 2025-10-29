import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue]=useState(15);

  const addValue= ()=>{
    setValue(value+1);
  }

  const removeValue=()=>{
    setValue(value-1);
  }

  return (
    <>
    <h1>This is a counter App</h1>
    <h2>Value: {value}</h2>

    <button onClick={addValue}>Add Value</button><br /><br />
    <button onClick={removeValue}>Decrease Value</button>
    
    </>
  )
}

export default App
