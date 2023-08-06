import React from 'react'
import ImgCarouselTwo from '../components/ImgCarruselTwo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResourceLinks from '../components/ResourceLinks'


export default function Aprende() {
  return (
    <div>
      <Navbar />
      <div>
      <ImgCarouselTwo />
      <div className='p-10'>
      <ResourceLinks />
      </div>
      </div>
     <Footer />
    </div>
  )
}
