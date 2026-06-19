import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >Count is {count}</div>
        <button onClick={() => setCount( count + 1)}>
          UPDATE COUNT
        </button>
        <button onClick={() => setCount( count - 1)}>
          REMOVE COUNT
        </button>
       
    </>
  )
}

export default App
