import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor,setNavColor] = useState(false);
  const location = useLocation();

  const ChangeColor = () => {
    if(window.scrollY >= 60) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }

  window.addEventListener('scroll', ChangeColor);

  return (
    <nav className=" bg-white text-green-dark sticky top-0 z-50 font-medium" >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/"><img src={require('../images/logo.png')} height='82' width='100%' alt='logo' className="text-white text-2xl font-bold" /></Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <HiMenu className='text-[40px]'/>
            </button>
          </div>
          <div className={`transition duration-500 ease-in-out transform ${isOpen ? 'block' : 'hidden'} md:flex  md:items-center md:w-auto`}>
            {location.pathname !== "/recicla" && <Link to="/recicla" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline" onClick={() => setIsOpen(false)}>Reciclar</Link>}
            {location.pathname !== "/nosotros" && <Link to="/nosotros" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline" onClick={() => setIsOpen(false)}>Quienes somos</Link>}
            {location.pathname !== "/aprende" && <Link to="/aprende" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline" onClick={() => setIsOpen(false)}>Beneficios del reciclaje</Link>}
            {location.pathname !== "/login" && <Link to="/login" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline" onClick={() => setIsOpen(false)}>Acceder</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
