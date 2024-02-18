import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './assets/components/Person'
import Cart from './assets/components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person></Person>
    <Cart></Cart>
    </>
  )
}

export default App
