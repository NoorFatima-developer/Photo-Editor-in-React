import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Easy Image Editor</h2>
        {/* Main Content */}
        <div>
          {/* Left Section */}
          <div>
            <p>Filters</p>
            <button>Brightness</button> 
            <button>Saturation</button> 
            <button>Inversion</button> 
            <button>Grayscale</button> 
          </div>
          {/* Right Section */}
          <div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
