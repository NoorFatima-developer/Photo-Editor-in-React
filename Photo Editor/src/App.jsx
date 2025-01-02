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
          {/* Filter wali div */}

          <div>
            <p>Filters</p>
            <div>
            <button>Brightness</button> 
            <button>Saturation</button> 
            <button>Inversion</button> 
            <button>Grayscale</button> 
            </div>
          </div>

          {/* Brightness wali div */}
          <div>
              <p>Brightness</p>
              <p>100%</p>
              <input type="range" min="0" max="200" value="100"></input>
          </div>

          {/* Rotate and Flip wali div */}

          <div>
          <p>Rotate & Flip</p>
              <div>
                  <button><i class = "fa-solid fa-rotate-left"></i></button>
                  <button><i class = "fa-solid fa-rotate-right"></i></button>
                  <button><i class='bx bx-reflect-vertical'></i></button>
                  <button><i class='bx bx-reflect-horizontal'></i></button>
              </div>   
          </div>

          </div>
          {/* left section ends here... */}

          {/* Right Section */}
          <div>
              <img
                src="./src/assets/image-placeholder.svg"/>
          </div>

        </div>  
        {/* Main content div ends here... */}

      </div>
      {/* Start div ends here */}
    </>
  )
}

export default App
