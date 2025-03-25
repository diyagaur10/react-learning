import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addvalue = () =>{
    counter = counter + 1;
    setCounter(counter)
  }
  const remvalue = () =>{
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
     <h1>chai aur code</h1>
     <h2>counter: {counter} </h2>
     <button
     onClick={addvalue}
     >Add value</button>
     <br></br>
     <button
     onClick={remvalue}
     >Remove value</button>
    </>
  )
}

export default App
