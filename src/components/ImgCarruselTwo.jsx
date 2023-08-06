import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function ImgCarouselTwo() {
  const slides = [
    {
      url: 'https://i.imgur.com/Tm3oTEW.jpg',
      text: '¿Qué es el reciclaje?\nEl reciclaje es el proceso de convertir desechos en nuevos productos para prevenir el desperdicio de materiales útiles, reducir el consumo de recursos naturales frescos, disminuir la energía utilizada, reducir la contaminación del aire y del agua, y disminuir las emisiones de gases de efecto invernadero. Al reciclar, estamos protegiendo nuestro planeta para las generaciones futuras.'
    },
    {
      url: 'https://i.imgur.com/01Ybcjp.jpg',
      text: ' La importancia del reciclaje\nReciclar tiene una multitud de beneficios. Reduce la cantidad de residuos que se envían a los vertederos y a las incineradoras, ahorra energía, reduce las emisiones de gases de efecto invernadero que contribuyen al cambio climático global, y ayuda a mantener el medio ambiente para las futuras generaciones. Además, el reciclaje puede generar empleo en la gestión de residuos y en la industria del reciclaje.'
    },
    {
      url: 'https://i.imgur.com/z7zR92X.jpg',
      text: '  Las 3Rs del reciclaje: Reducir, Reutilizar, Reciclar\nLa estrategia de las 3Rs, Reducir, Reutilizar y Reciclar, puede ser implementada por todos. Reducir implica usar menos recursos y minimizar el desperdicio. Reutilizar se refiere al uso de un producto más de una vez, en su forma original o para un nuevo propósito. Reciclar es el proceso de convertir materiales usados, desechos o residuos en nuevos productos.'
    },
    {
      url: 'https://i.imgur.com/i44l3eV.jpg',
      text: '¿Cómo reciclar correctamente?\nLa correcta separación de los residuos es fundamental para un buen reciclaje. Los materiales comunes para reciclar incluyen papel, plástico, vidrio y metal. Asegúrate de limpiar los productos antes de reciclarlos para evitar la contaminación, y recuerda que no todos los productos dentro de estas categorías son reciclables. Consulta las regulaciones locales de reciclaje para saber qué puedes reciclar en tu área.'
    },
    {
      url: 'https://i.imgur.com/w4Zs8cO.jpg',
      text: 'Haciendo una diferencia\nTu contribución importa. Si cada uno de nosotros toma la responsabilidad de reciclar, podemos hacer una gran diferencia en nuestro planeta. Recuerda, no se trata solo de reciclar, también es importante reducir y reutilizar. Juntos, podemos crear un mundo más limpio y sostenible para todos.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 20000); // Change slide every 5 seconds

    return () => clearInterval(slideTimer); // Clear interval on component unmount
  }, [slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[98%] h-[580px] w-full m-auto py-10 px-2 relative group'>
      <img
        src={slides[currentIndex].url}
        alt="Slide"
        className='w-full h-full rounded-2xl object-cover bg-center bg-cover duration-600'
      />
      {/* Text Container */}
      <div className='w-[60%] h-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-center'>
        <div className='text-white text-xl bg-gradient-to-b from-black/60 to-black/40 p-4 rounded-md shadow-lg'>
          {slides[currentIndex].text.split('\n').map((para, index) =>
            index === 0 ?
              <h2 key={index} className="mb-2 text-2xl font-extrabold text-shadow-custom">{para}</h2> :
              <p key={index} className="mb-2 text-shadow-custom">{para}</p>
          )}
        </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-primary' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgCarouselTwo;
