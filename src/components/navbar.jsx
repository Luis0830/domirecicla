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
        <Link to="/"><img src={require('../images/logo.png')} height='82' width='100%' alt='logo' className="text-white text-2xl font-bold" /></Link>
        <div className="md:hidden">
          {/* Resto del código */}
        </div>
        <div className={`md:block ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/recicla" className="px-4">Reciclar</Link>
          <Link to="/quienes-somos" className="px-4">Quienes somos</Link>
          <Link to="/beneficios-del-reciclaje" className="px-4">Beneficios del reciclaje</Link>
          <Link to="/acceder" className="px-4">Acceder</Link>
        </div>
      </div>
    </div>
  </nav>
);
}

export default Navbar;

