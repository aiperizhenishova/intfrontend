import { useState } from 'react'
import './App.css'
import Button from "@shared/ui/Button/Button.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button> First </Button>
    </>
  )
}

export default App
