// react dependencies

// user components
import RadixCounter from './components/RadixCounter'
// styles sheets
import './App.css'
import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <RadixCounter />

      <h5 className='text-center fw-bold fs-5 mt-3 border border-2'>67150301 สุพิชญาณ์ ชื่นชม</h5>


    </div>
  )
}

export default App
