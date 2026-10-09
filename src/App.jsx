import { useState } from 'react'
import './App.css'
import Para from './para'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Para count={count} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default App
