import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]=useState("red");

  return (
    <div className="main"
    style={{backgroundColor:color}}>
      <div className="tube">
        <button onClick={()=>setColor("Blue")} style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={()=>setColor("Yellow")} style={{backgroundColor:"Yellow"}} className='text-black'>Yellow</button>
        <button onClick={()=>setColor("Green")} style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>setColor("Gray")} style={{backgroundColor:"Gray"}}>Gray</button>
        <button onClick={()=>setColor("Purple")} style={{backgroundColor:"Purple"}}>Purple</button>
        <button onClick={()=>setColor("White")} style={{backgroundColor:"White"}} className='text-black'>White</button>
        <button onClick={()=>setColor("Red")} style={{backgroundColor:"Red"}}>Red</button>

      </div>
    </div>
  )
}

export default App
