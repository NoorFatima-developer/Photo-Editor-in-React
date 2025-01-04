import { useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 01---choose file...
  const fileInput = useRef(null)
  const [selectedFile, setSelectedFile] = useState('./src/assets/image-placeholder.svg')
  const [brightness, setBrightness] = useState(100); // Slider value ke liye state
  const [saturation, setSaturation] = useState(100); 
  const [inversion, setInversion] = useState(0); 
  const [grayscale, setGrayscale] = useState(0);  
  const [isDisabled, setisDisabled] = useState(true); 
  const [activeFilter, setActiveFilter] = useState('brightness');  //active filter state...

    // 02---load image
    const loadImage = (e) => {
      e.preventDefault()  // Prevent form submission...
      const file = e.target.files[0]    // Get the selected file...
      if(!file) return;
  
      const newImgurl = URL.createObjectURL(file)
      setSelectedFile(newImgurl)
      setisDisabled(false); // Enable the reset button
    }

      // 03--choose and reset image...
  function handleButtonClick(action) {
    if (action === 'reset') {
      setSelectedFile('./src/assets/image-placeholder.svg'); // Reset to default image
    } else if (action === 'choose') {
      fileInput.current.click(); // Trigger file input click
    }
    setisDisabled(true); // Disable the reset button

  }


  //05-- Handle Filter Click..

  function handleFilterClick(filter) {
    setActiveFilter(filter);
  }

  // 06-- Set activerFiler valeues according to selected filter...
  function handleSliderChange(e) {
    const value = e.target.value;
    if(activeFilter === 'brightness') {
      setBrightness(value);
    }
    if(activeFilter === 'saturation') {
      setSaturation(value);
    }
    if(activeFilter === 'inversion') {
      setInversion(value);
    }
    if(activeFilter === 'grayscale') {
      setGrayscale(value);
    }
  }

  return (

    <>
     <section className="w-full max-w-[850px] flex mx-auto items-center justify-center bg-white mt-28 min-h-[500px] rounded-lg shadow-lg">
     <div className='w-full mx-8 mt-10'>
        <h2 className=' font-poppins text-xl font-bold mb-8'>Easy Image Editor</h2>
        {/* Main Content */}
        <div className="flex lg:flex-row md:flex-col justify-between">
          {/* Left Section */}

          <div className={` border-customGray border-[1px] rounded-md p-4 space-y-5 lg:w-1/2 ${isDisabled ? 'pointer-events-none opacity-60': ""}`}>
          {/* Filter wali div */}

          <div className='w-[225px] h-[130px] font-poppins'>
            <p className='mb-4 text-sm'>Filters</p>
            <div className='grid grid-cols-2 gap-x-4 gap-y-2 '>
            {/* <button className='h-10 text-md text-white rounded-sm border border-gray-400 w-28 bg-btn_background_color'>Brightness</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28 hover:text-white hover:bg-btn_background_color transition-all duration-200'>Saturation</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28 hover:text-white hover:bg-btn_background_color transition-all duration-200'>Inversion</button> 
            <button className='h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28 hover:text-white hover:bg-btn_background_color transition-all duration-200'>Grayscale</button>  */}
            {['brightness', 'saturation', 'inversion', 'grayscale'].map((filter)=>(
              <button 
              key={filter}
              className={`h-10 text-md text-gray-500 rounded-sm border border-gray-400 w-28 ${activeFilter === filter ? 'text-white bg-btn_background_color' : 'text-gray-500 hover:text-white hover:bg-btn_background_color transition-all duration-200' }`}
              onClick={()=> handleFilterClick(filter)}>
               {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
            </div>
          </div>

          {/* Brightness wali div */}
          <div>
              <div className='flex justify-between mb-2 font-poppins'>
              <p>{activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</p>
              <p>
                {activeFilter === 'brightness' ? `${brightness}%` :
                activeFilter ==='saturation'? `${saturation}%` :
                activeFilter === 'inversion'? `${inversion}%` :
                `${grayscale}%`}
              </p>
              </div>
              <input 
              onChange={handleSliderChange} 
              value={activeFilter === 'brightness' ? 'brightness' 
               : activeFilter === 'saturation' ? 'saturation'
               : activeFilter === 'inversion'? 'inversion'
               : grayscale} 
                type="range" 
                min="0" 
                max={activeFilter === 'brightness' || activeFilter === 'saturation' ? '200' : '100'}
                className='w-full accent-btn_background_color'>
              </input>
          </div>

          {/* Rotate and Flip wali div */}

          <div className='text-xl font-poppins '>
          <p className='mt-[-20px] mb-8'>Rotate & Flip</p>
              <div className='space-x-1 flex'>
                  <button className='rounded-sm border border-gray-400 w-14 h-9'><i class = "fa-solid fa-rotate-left"></i></button>
                  <button className='rounded-sm border border-gray-400 w-14 h-9'><i class = "fa-solid fa-rotate-right"></i></button>
                  <button className='rounded-sm border border-gray-400 w-14 h-9'><i class='bx bx-reflect-vertical'></i></button>
                  <button className='rounded-sm border border-gray-400 w-14 h-9'><i class='bx bx-reflect-horizontal'></i></button>
              </div>   
          </div>

          </div>
          {/* left section ends here... */}

          {/* Right Section */}
         
          <div className='w-full pl-4 '>
           <img
             src={selectedFile}
            //  onLoad={resetFilters}
             className='w-full h-full max-w-none object-cover'/>
          </div>
         
          {/* right section ends here... */}

        </div>  
        {/* Main content div ends here... */}

        {/* last div */}

        <div className='flex lg:flex-row flex-col justify-between mb-8 font-poppins'>
          <button onClick={() => handleButtonClick('reset')}
        className={`text-gray_text border border-gray-400 rounded-sm p-2 mt-4 uppercase text-[14px] h-10} ${isDisabled ? 'pointer-events-none opacity-60': ""}`}>Reset Filters</button>
          <div className='space-x-2'>
          <input type="file" accept="image/*" ref={fileInput} hidden onChange={loadImage}/>
          <button onClick={() => handleButtonClick('choose')} className='text-white border border-gray-400 rounded-md p-2 mt-4 bg-choose_image uppercase text-[14px]'>Choose Image</button>
          <button className={`text-white border border-gray-400 rounded-md p-2 mt-4 bg-btn_background_color uppercase text-[14px] ${isDisabled ? 'pointer-events-none opacity-60': ""}`}>Save Image</button>
        </div>  
        </div>


      </div>
      {/* Start div ends here */}
     </section>
    </> 
  )
}

export default App
