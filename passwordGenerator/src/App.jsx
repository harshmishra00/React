import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength]=useState("8");

  const [numAllow, setnumAllow]=useState("false");
  const [charAllow, setcharAllow]=useState("false");

  const passwordRef=useRef(null);

  const [password, setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+= "0987654321";
    if(charAllow) str+= "~!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random() *str.length +1)

      pass+=str.charAt(char);
    }

    setPassword(pass)


  }, [length, numAllow, charAllow, setPassword])

  const copyPass=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    alert("Password Copied to clipboard");
  }, [password])

  useEffect((pass)=>{passwordGenerator()}, [length, charAllow, numAllow, passwordGenerator])

  return (
    <> 
    <div className='text-white border-2 border-white p-8'>
      Password Generator
      <div className='flex justify-self-center'>
        <input 
        type="text" 
        value={password}
        className='w-80 outline-none py-1 px-3 text-black'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPass} className='bg-blue-600 pl-2 pr-2'>Copy</button>
      </div>
      <div className='flex justify-self-center gap-3'>
        <div>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='pl-2'>Length: {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={numAllow}
          id='numInput'
          onChange={()=>{
            setnumAllow((prev)=>!prev)
          }}
           />
           <label className=''>Numbers</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='charInput'
          onChange={()=>{
            setcharAllow((prev)=>!prev)
          }}
           />
           <label className=''>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
