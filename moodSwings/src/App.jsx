import { useState } from 'react'
import './App.css'

function App() {
  const [currMood , setcurrMood] = useState("😭")

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-300 text-center">
      
      <h1 className="text-9xl mb-10 drop-shadow-lg">{currMood}</h1>
      
      <div className="names flex flex-wrap justify-center gap-4">
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("😭")}>Cry</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("😀")}>Happy</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("😍")}>Loved</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("🤔")}>Think</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("🤫")}>Shhhh..</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("🤥")}>Lying</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("🤯")}>Explode</button>
        <button className="border-2 border-black rounded-2xl px-6 py-2 font-semibold bg-white/70 hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-xl" onClick={()=> setcurrMood("🐱")}>Cat</button>
      </div>
    </div>
  )
}

export default App
