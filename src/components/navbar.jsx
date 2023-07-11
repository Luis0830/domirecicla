import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColor,setNavColor] = useState(false);

const ChangeColor = () => {
    if(window.scrollY >= 60) {
        setNavColor(true)
    }else {
        setNavColor(false)
    }
}

window.addEventListener('scroll', ChangeColor)

  return (
    <nav className=" bg-white text-green-dark sticky top-0 z-50 font-medium" >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to='/'><img src={require('../images/logo.png')} height='82' width='100%' alt='logo' className="text-white text-2xl font-bold" /></Link>
          <div className="md:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="block text-gray-100 hover:text-white focus:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen && (
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 5a1 1 0 011 1v12a1 1 0 11-2 0V6a1 1 0 011-1zm12 0a1 1 0 011 1v12a1 1 0 11-2 0V6a1 1 0 011-1z" />
                )}
                {!isOpen && (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 5a1 1 0 011 1v2a1 1 0 11-2 0V6a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0V6a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0V6a1 1 0 011-1zM4 11a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4 17a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm7 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" />
                )}
              </svg>
            </button>
          </div>
          <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/reciclar" className="px-4">Reciclar</Link>
            <Link to="/quienes-somos" className="px-4">Quienes somos</Link>
            <Link to="/beneficios-del-reciclaje" className="px-4">Beneficios del reciclaje</Link>
            <Link to="/acceder" className="px-4">Acceder</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

