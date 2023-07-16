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
      <div>
        <div className='flex gap-x-6 mt-10'>
          <div className='' onClick={() => filterLocations(locationCollectionRef2)}>
            <p>Plastico</p>
            <div className='p-[2%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon1} alt="Image" className="w-[80%] sm:w-[80%] lg:w-[90%]"/>
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef4)}>
            <p>Papel</p>
            <div className='p-[2%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon2} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[90%]"/>
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef1)}>
            <p>Metal</p>
            <div className='p-[2%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon3} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[90%]"/>
            </div>
          </div>

          <div onClick={() => filterLocations(locationCollectionRef3)}>
            <p>Contenedores</p>
            <div className='p-[2%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon4} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[90%]"/>
            </div>
          </div>
          
          <div onClick={() => filterLocations(locationCollectionRef)}>
            <p>Centros de reciclaje</p>
            <div className='p-[2%] bg-light-green bg-opacity-[60%] rounded-[25px] cursor-pointer'>
              <img src={icon5} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[90%]"/>
            </div>
          </div>
        </div>
    
        <GoogleMap locations={locations} />
        <div/>
      </div>
    </div>
  );
}
