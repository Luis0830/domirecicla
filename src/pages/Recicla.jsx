import React, { useState, useEffect } from 'react';
import GoogleMap from '../components/GoogleMap';
import Navbar from '../components/Navbar';
import icon1 from '../images/recicla1.png';
import icon2 from '../images/recicla2.png';
import icon3 from '../images/recicla3.png';
import icon4 from '../images/recicla4.png';
import icon5 from '../images/recicla5.png';
import { db } from '../firebase/confi';
import { collection, getDocs } from "firebase/firestore";
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Recicla() {

  const [locations, setLocations] = useState([]);
  const locationCollectionRef = collection(db, "location");
  const locationCollectionRef1 = collection(db, "metal");
  const locationCollectionRef2 = collection(db, "plastico");
  const locationCollectionRef3 = collection(db, "contenedor");
  const locationCollectionRef4 = collection(db, "papel");

  const getLocation = async (locationCollection) => {
    const data = await getDocs(locationCollection);
    console.log("Raw data from Firebase:", data);
    const processedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log("Processed data:", processedData);
    setLocations(processedData);
  };

  const filterLocations = (locationCollection) => {
    console.log("Location collection in filterLocations:", locationCollection);
    getLocation(locationCollection);
  };

  useEffect(() => {
    getLocation(locationCollectionRef);
    console.log("Locations after initial getLocation:", locations);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex-col content-center items-center justify-center text-center'>
        <h1 className=' font-bold text-xl text-green-dark'>Elige la opcion para reciclar</h1>
        <div className='flex gap-x-6 mt-10 text-center content-center items-center justify-center'>
          <div className='' onClick={() => filterLocations(locationCollectionRef2)}>
            <p className=' font-bold text-green-dark'>Plastico</p>
            <div className='w-[130px] h-[130px] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer '>
              <img src={icon1} alt="Image" className="p-3 w-[80%] sm:w-[80%] lg:w-[150%]" />
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef4)} className='items-center' >
            <p className=' font-bold text-green-dark'>Papel</p>
            <div className='w-[130px] h-[130px]  bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon2} alt="Image" className="p-3 w-[80%] sm:w-[80%] lg:w-[150%]" />
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef1)}>
            <p className=' font-bold text-green-dark'>Metal</p>
            <div className=' w-[130px] h-[130px]  bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon3} alt="Image" className=" p-3 w-[60%] sm:w-[50%] lg:w-[150%]" />
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef3)}>
            <p className=' font-bold text-green-dark'>Contenedores</p>
            <div className='w-[130px] h-[130px]  bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon4} alt="Image" className=" p-5 w-[60%] sm:w-[50%] lg:w-[150%]" />
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef)}>
            <p className=' font-bold text-green-dark'>Centros de reciclaje</p>
            <div className='w-[200px] h-[130px]  h-[100%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon5} alt="Image" className="p-2 w-[60%] sm:w-[50%] lg:w-[150%]" />
            </div>
          </div>
        </div>
        <div className='flex mt-10 w-[90%] justify-center items-center'>
          <GoogleMap locations={locations} />
        </div>
        <div className='mt-10'>
          <div className='mb-5 text-center'>
            <h1 className='text-xl font-bold text-green-dark'>Contribuye al Mejoramiento Continuo
              Tu voz importa y puede hacer una gran diferencia.</h1>
          </div>
          <div className='flex items-center text-center justify-center'>
            <Contact />
          </div>
        </div>
        <div />
      </div>
      <Footer />
    </div>
  );
}
