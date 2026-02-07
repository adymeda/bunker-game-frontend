import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, world!</h1>
      <img src="/user_icon.png" alt="" className="avatar" draggable={false}/>
    </>
  )
}

export default App
