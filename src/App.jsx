import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './assets/components/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person></Person>
    </>
  )
}

export default App
