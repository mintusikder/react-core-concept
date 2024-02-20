import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Person from './assets/components/Person'
import Cart from './assets/components/Cart/Cart'
import ArrayExample from './assets/components/Event/ArrayExample'
import ObjectExample from "./assets/components/Event/ObjectExample";
import UseEffectExample from "./assets/components/Event/UseEffectExample";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Person></Person>
    <Cart></Cart>
    <ArrayExample></ArrayExample>
   <ObjectExample></ObjectExample>
   <UseEffectExample></UseEffectExample>
    </>
  )
}

export default App
