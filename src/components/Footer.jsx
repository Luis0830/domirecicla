import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-light-green text-white mt-auto p-20">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/4 text-center md:text-left">
                    <Link to="/">
                        <img src={logo} alt="logo" className="inline-block mb-4 w-50" />
                    </Link>
                </div>

                <ul className="w-full md:w-1/2 md:text-center text-sm mb-6 md:mb-0">
                    <li className="inline-block md:mx-4 py-2 md:py-0">
                        <Link to="/recicla" className="text-white hover:text-letter-blue">Reciclar</Link>
                    </li>
                    <li className="inline-block md:mx-4 py-2 md:py-0">
                        <Link to="/quienes-somos" className="text-white hover:text-letter-blue">Quienes somos</Link>
                    </li>
                    <li className="inline-block md:mx-4 py-2 md:py-0">
                        <Link to="/beneficios-del-reciclaje" className="text-white hover:text-letter-blue">Beneficios del reciclaje</Link>
                    </li>
                    <li className="inline-block md:mx-4 py-2 md:py-0">
                        <Link to="/acceder" className="text-white hover:text-letter-blue">Acceder</Link>
                    </li>
                </ul>

                <div className="w-full md:w-1/4 text-center md:text-right mt-4 md:mt-0">
                    <p className="text-sm">© {new Date().getFullYear()} DomiRecicla desarrollado por Luis Garcia</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;