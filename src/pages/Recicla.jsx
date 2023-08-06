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
  const [selectedFilter, setSelectedFilter] = useState(null); // Nuevo estado

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

  const filterLocations = (locationCollection, filterName) => {
    console.log("Location collection in filterLocations:", locationCollection);
    getLocation(locationCollection);
    setSelectedFilter(filterName); // Actualizar filtro seleccionado
  };

  useEffect(() => {
    getLocation(locationCollectionRef);
    console.log("Locations after initial getLocation:", locations);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='font-bold text-xl text-green-dark'>Elige la opción para reciclar</h1>
        <div className='flex gap-x-6 mt-10'>
        <div>
          <p className='font-bold text-green-dark '>Plastico</p>
          <div className={`w-32 h-32 rounded-[25px] cursor-pointer flex flex-col items-center justify-center ${selectedFilter === "plastico" ? 'bg-blue-400' : 'bg-light-green bg-opacity-[60%]'}`} onClick={() => filterLocations(locationCollectionRef2, "plastico")}>
            <img src={icon1} alt="Image" className="p-3 object-contain" />
          </div>
          </div>
          <div>
          <p className='font-bold text-green-dark'>Papel</p>
          <div className={`w-32 h-32 rounded-[25px] cursor-pointer flex flex-col items-center justify-center ${selectedFilter === "papel" ? 'bg-blue-400' : 'bg-light-green bg-opacity-[60%]'}`} onClick={() => filterLocations(locationCollectionRef4, "papel")}>
            <img src={icon2} alt="Image" className="p-3 object-contain" />
          </div>
          </div>

          <div>
          <p className='font-bold text-green-dark'>Metal</p>
          <div className={`w-32 h-32 rounded-[25px] cursor-pointer flex flex-col items-center justify-center ${selectedFilter === "metal" ? 'bg-blue-400' : 'bg-light-green bg-opacity-[60%]'}`} onClick={() => filterLocations(locationCollectionRef1, "metal")}>
            <img src={icon3} alt="Image" className="p-3 object-contain" />
          </div>
          </div>

          <div>
          <p className='font-bold text-green-dark'>Contenedores</p>
          <div className={`w-32 h-32 rounded-[25px] cursor-pointer flex flex-col items-center justify-center ${selectedFilter === "contenedor" ? 'bg-blue-400' : 'bg-light-green bg-opacity-[60%]'}`} onClick={() => filterLocations(locationCollectionRef3, "contenedor")}>
            <img src={icon4} alt="Image" className="p-3 object-contain" />
          </div>
          </div>

          <div>
          <p className='font-bold text-green-dark'>Centros de reciclaje</p>
          <div className={`w-32 h-32 rounded-[25px] cursor-pointer flex flex-col items-center justify-center ${selectedFilter === "location" ? 'bg-blue-400' : 'bg-light-green bg-opacity-[60%]'}`} onClick={() => filterLocations(locationCollectionRef, "location")}>
            <img src={icon5} alt="Image" className="p-3 object-contain" />
          </div>
          </div>
        </div>

        <div className='flex mt-10 w-[90%] justify-center'>
          <GoogleMap locations={locations} />
        </div>

        <div className='mt-10'>
          <div className='mb-5 text-center'>
            <h1 className='text-xl font-bold text-green-dark'>Contribuye al Mejoramiento Continuo
              Tu voz importa y puede hacer una gran diferencia.</h1>
          </div>
        </div>
      </div>
      <div className='flex items-center text-center justify-center'>
            <Contact />
          </div>
      <Footer />
    </div>
  );
}
