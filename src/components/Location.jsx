import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from '../firebase/confi';

export default function Location() {
  
  const [newName, setNewName] = useState("");
  const [newLat, setNewLat] = useState(0);
  const [newLog, setNewLog] = useState(0);
  const [newTipo, setNewTipo] = useState("");
  const [newHor, setNewHor] = useState("");
  const [newCont, setNewCont] = useState("");
  const [location, setLocation] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("location");
  const locationCollectionRef = collection(db, selectedCollection);

  const CreateLocation = async () => {
     await addDoc(locationCollectionRef, {lugar: newName, lat: newLat, lng: newLog, tipo: newTipo, horario: newHor, contacto: newCont})
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, selectedCollection, id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {
    const getLocation = async () => {
      const data = await getDocs(locationCollectionRef);
      setLocation(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
   };
   getLocation();
  }, [selectedCollection]);

  return (
    <div className='flex flex-col p-5 space-y-4'>  
      <div className='flex flex-col'>
        <h1 className='text-2xl font-semibold mb-2 text-green-dark'>Nueva ubicación oficina</h1>
        <select value={selectedCollection} onChange={(e) => setSelectedCollection(e.target.value)}>
          <option value="location">Ubicación</option>
          <option value="papel">Papel</option>
          <option value="metal">Metal</option>
          <option value="plastico">Plástico</option>
          <option value="contenedor">Contenedor</option>
        </select>
        <div className='gap-5 flex flex-col'>
        <input type='string' className='border p-2 rounded-md' placeholder='Nombre de la oficina' onChange={(event) => {setNewName(event.target.value)}}/>
        <input type='number' className='border p-2 rounded-md' placeholder='Latitud' onChange={(event) => {setNewLat(event.target.value)}}/>
        <input type='number' className='border p-2 rounded-md' placeholder='Longitud' onChange={(event) => {setNewLog(event.target.value)}}/>
        <input type='number' className='border p-2 rounded-md' placeholder='Tipo' onChange={(event) => {setNewTipo(event.target.value)}}/>
        <input type='number' className='border p-2 rounded-md' placeholder='Horario' onChange={(event) => {setNewHor(event.target.value)}}/>
        <button className='bg-blue text-white p-2 w-[50%] rounded-md mt-2' onClick={CreateLocation}>Agregar</button>
        </div>
        {location.map((location) => { 
          return (
          <div className='border p-4 rounded-md mt-2'>
            <h1 className='font-bold text-lg mb-2'>{location.lugar}</h1>
            <p className='mb-1'>Latitud: {location.lat}</p>
            <p className='mb-2'>Longitud: {location.lng}</p>
            <p className='mb-2'>Tipo:{location.tipo}</p>
            <p className='mb-2'>Horario: {location.horario}</p>
            <p className='mb-2'>Contacto: {location.contacto}</p>
            <button className='bg-red-500 text-white p-2 rounded-md' onClick={ () => {deleteUser(location.id)}}>Borrar oficina</button>
          </div>
          );})} 
      </div>
    </div>
  )
}
