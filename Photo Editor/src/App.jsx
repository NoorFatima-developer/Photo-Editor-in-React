import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section className='w-full max-w-[850px] flex mx-auto items-center justify-center bg-white mt-28 min-h-[500px] ' >
     <div className='ml-0'>
        <h2 className=' font-poppins text-xl font-bold mb-8'>Easy Image Editor</h2>
        {/* Main Content */}
        <div className='flex flex-row'>
          {/* Left Section */}

          <div className=' border-customGray border-[1px] rounded-md p-4 space-y-5'>
          {/* Filter wali div */}

          <div>
            <p className='mb-2'>Filters</p>
            <div className='flex flex-wrap justify-between'>
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28'>Brightness</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28'>Saturation</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28'>Inversion</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28'>Grayscale</button> 
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
          {/* right section ends here... */}

        </div>  
        {/* Main content div ends here... */}

        {/* last div */}

        <div>
          <button>Reset Filters</button>
          <button>Choose Image</button>
          <button>Save Image</button>
        </div>


      </div>
      {/* Start div ends here */}
     </section>
    </> 
  )
}

export default App
