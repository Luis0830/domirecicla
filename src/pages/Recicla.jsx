import React from 'react'
import GoogleMap from '../components/GoogleMap'
import Navbar from '../components/Navbar'
import icon1 from '../images/recicla1.png'
import icon2 from '../images/recicla2.png'
import icon3 from '../images/recicla3.png'
import icon4 from '../images/recicla4.png'
import icon5 from '../images/recicla5.png'

export default function Recicla() {
  return (
    <div>
      <Navbar />
      <div>
    <div className='flex '>
      <div className='p-[2%] bg-light-green bg-opacity-[60%]'>
      <img src={icon1} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
      </div>
      <div className='p-[2%] bg-light-green bg-opacity-[60%]'>
      <img src={icon2} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
      </div>
      <div className='p-[2%] bg-light-green bg-opacity-[60%]'>
      <img src={icon3} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
      </div>
      <div className='p-[2%] bg-light-green bg-opacity-[60%]'>
      <img src={icon4} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
      </div>
      <div className='p-[2%] bg-light-green bg-opacity-[60%]'>
      <img src={icon5} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
      </div>
      
    </div>
    <GoogleMap />
    <div/>
    </div>
    </div>
  )
}
