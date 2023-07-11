import React from 'react'
import Navbar from '../components/Navbar'
import ImgCarousel from '../components/ImgCarrusel'


export default function Inicio() {
  return (
    <>
      <Navbar />
      <div>
      <ImgCarousel />
      <ImgCarousel />
      <ImgCarousel />
      <ImgCarousel />
      <ImgCarousel />
      </div>
    </>
  )
}
