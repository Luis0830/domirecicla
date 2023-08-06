import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <div className="flex flex-col lg:flex-row bg-white rounded-md shadow-lg p-6 mb-6">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <img src="https://i.imgur.com/7fUNqpF.png" alt="About us" className="w-3/4 h-full object-cover rounded-md"/>
          </div>
          <div className="w-full lg:w-1/2 text-justify">
            <h1 className="text-3xl font-bold mb-4 text-green-dark">Acerca de Nosotros</h1>
            <p className="text-lg mb-4">
              Somos DomiRecicla, una plataforma digital creada con el objetivo de promover y facilitar el reciclaje en la República Dominicana. Nacimos de la necesidad de afrontar el desafío de la gestión de residuos en nuestro país y de nuestro compromiso con la conservación del medio ambiente.
            </p>
            <p className="text-lg mb-4">
              En DomiRecicla, creemos en el poder de la tecnología para hacer del mundo un lugar mejor. Utilizamos las últimas herramientas tecnológicas para desarrollar una plataforma web fácil de usar e intuitiva, que permite a los usuarios localizar los puntos de reciclaje más cercanos y aprender sobre la importancia del reciclaje.
            </p>
            <p className="text-lg mb-4">
              En DomiRecicla, estamos comprometidos con la sostenibilidad ambiental y el avance de nuestra comunidad. Trabajamos constantemente para mejorar nuestra plataforma y expandir su impacto. Te invitamos a unirte a nosotros en este viaje, para juntos hacer de la República Dominicana un lugar más limpio y sostenible.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
