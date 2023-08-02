import React from 'react'
import Navbar from '../components/Navbar'
import ImgCarousel from '../components/ImgCarrusel'
import icon2 from '../images/inicio2.png'
import icon1 from '../images/inicio1.png'
import icon3 from '../images/inicio3.png'
import icon4 from '../images/inicio4.png'
import Footer from '../components/Footer'


export default function Inicio() {
  return (
    <>
    <Navbar />
    <div>
      <div>
        <ImgCarousel/>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 p-[10%]'>
        <div className='bg-blue p-[5%] grid rounded-[20px] bg-opacity-[45%] cursor-pointer'>
          <div className=''>
            <h1 className='text-[20px] sm:text-[16px] lg:text-[20px] text-green-dark mt-5 mb-5 text-center font-semibold'>
              Gestión Eficaz de Residuos y Puntos de Reciclaje
            </h1>
            <p className='text-[12px] sm:text-[10px] lg:text-[12px] text-green-dark text-center font-semibold'>
              Nuestra plataforma facilita la búsqueda de puntos de reciclaje en toda la República Dominicana. Simplemente introduce tu ubicación y te mostraremos los centros de reciclaje más cercanos a ti, junto con información útil como los horarios de apertura y los tipos de residuos que aceptan.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={icon1} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
          </div>
        </div>
        <div className='bg-blue p-[5%] grid rounded-[20px] bg-opacity-[45%] cursor-pointer'>
          <div className=''>
            <h1 className='text-[20px] sm:text-[16px] lg:text-[20px] text-green-dark mt-5 mb-5 text-center font-semibold'>
              Aprende Sobre Prácticas Sostenibles
            </h1>
            <p className='text-[12px] sm:text-[10px] lg:text-[12px] text-green-dark text-center font-semibold'>
              En DomiRecicla, creemos en la importancia de la educación para un mundo más sostenible. Por eso, ofrecemos una amplia gama de recursos y consejos sobre cómo reducir, reutilizar y reciclar, para ayudarte a hacer elecciones más respetuosas con el medio ambiente en tu vida cotidiana.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={icon2} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
          </div>
        </div>
        <div className='bg-blue p-[5%] grid rounded-[20px] bg-opacity-[45%] cursor-pointer'>
          <div className=''>
            <h1 className='text-[20px] sm:text-[16px] lg:text-[20px] text-green-dark mt-5 mb-5 text-center font-semibold'>
              Jornadas de reciclaje Voluntariados
            </h1>
            <p className='text-[12px] sm:text-[10px] lg:text-[12px] text-green-dark text-center font-semibold'>
              Nuestro sistema de gestión de residuos te permite llevar un registro de tus hábitos de reciclaje y residuos, dándote una visión clara de tu impacto ecológico. También ofrecemos sugerencias sobre cómo puedes mejorar y reducir tu huella de residuos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={icon3} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
          </div>
        </div>
        <div className='bg-blue p-[5%] grid rounded-[20px] bg-opacity-[45%] cursor-pointer'>
          <div className=''>
            <h1 className='text-[20px] sm:text-[16px] lg:text-[20px] text-green-dark mt-5 mb-5 text-center font-semibold'>
              Contribuye al Mejoramiento Continuo
            </h1>
            <p className='text-[12px] sm:text-[10px] lg:text-[12px] text-green-dark text-center font-semibold'>
              Tu feedback es fundamental para nuestro crecimiento y mejora continua. Con tu ayuda, podemos hacer de DomiRecicla una plataforma aún más eficiente y útil. Tu voz importa y puede hacer una gran diferencia.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={icon4} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
