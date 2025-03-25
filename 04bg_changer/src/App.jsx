import { useState } from "react"


function App() {
  const [color, setColor]= useState("olive")

  return (
    <div className= "w-full h-screen duration-200"
    style= {{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-xl">
      
      <button
      onClick={() => setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "red"}}
      > Red</button>
      <button
      onClick={() => setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "green"}}
      > green</button>
      <button
      onClick={() => setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "blue"}}
      > blue</button>
      <button
      onClick={() => setColor("pink")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "pink"}}
      > pink</button>
      <button
      onClick={() => setColor("orange")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "orange"}}
      > orange</button>
      <button
      onClick={() => setColor("cyan")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-full"
      style = {{backgroundColor: "cyan"}}
      > cyan</button>
      </div>
      </div>
    </div>
  )
}

export default App
