import { useState } from 'react'

function App() {
  const [color, setColor]=useState("gray")
  const [name, setName]=useState("Harsh")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-self-center insert-x-0 px-2'>
        <div className='flex flexWrap justify-center gap-3  px-3 py-2 rounded-3xl'>
      <div className='justify-self-center space-x-3'>
           <button 
          onClick={()=> setName("Ram")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Ram</button>

          <button 
          onClick={()=> setName("Adarsh")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Adarsh</button>

          <button 
          onClick={()=> setName("Harshit")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Harshit</button>

          <button 
          onClick={()=> setName("Rakesh")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Rakesh</button>

          <button 
          onClick={()=> setName("Ronit")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Ronit</button>

          <button 
          onClick={()=> setName("Ramu")}
          className='outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg'>Ramu</button>

        </div>
    </div>
        </div>
      <h1 className='font-bold text-center text-5xl font-serif'
      style={{padding:400}}>{name}</h1>


      <div className='fixed flex flex-wrap justify-self-center bottom-12 insert-x-0 px-2'>
        <div className='flex flexWrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=> setColor("Red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick={()=> setColor("Green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>

          <button onClick={()=> setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>Blue</button>

          <button onClick={()=> setColor("Olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"olive"}}>Olive</button>

          <button onClick={()=> setColor("Gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={()=> setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"yellow"}}>Yellow</button>

          <button onClick={()=> setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}>Purple</button>

          <button onClick={()=> setColor("White")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"white"}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
