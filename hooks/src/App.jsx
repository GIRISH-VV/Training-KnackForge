import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log("Count has been updated to:", count)
  },[count,show])
  return (
    <div className="app">
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <hr />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello! This text is visible.</p>}
    </div>
  )
}

export default App
