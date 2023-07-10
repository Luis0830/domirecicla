import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore"; 
import { db } from '../firebase/confi';



export default function Location() {
  
  const [newName, setNewName] = useState("");
  const [newLat, setNewLat] = useState(0);
  const [newLog, setNewLog] = useState(0);
  const [location, setLocation] = useState([]);
  const locationCollectionRef = collection(db, "location");
  

  const CreateLocation = async () => {
     await addDoc(locationCollectionRef, {name: newName, lat: newLat, log: newLog})
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "location", id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {

   const getLocation = async () => {
      const data = await getDocs(locationCollectionRef);
      setLocation(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
   };
     getLocation();
  }, []);
 
  return (
    <div> 
      <h1>nueva ubicacion oficina</h1>
      <input type='string' placeholder='oficina' onChange={(event) => {setNewName(event.target.value)}}/>
      <input type='number' placeholder='latitud' onChange={(event) => {setNewLat(event.target.value)}}/>
      <input type='number' placeholder='longitud' onChange={(event) => {setNewLog(event.target.value)}}/>
      <button onClick={CreateLocation}>agregar</button>
      {location.map((location) => { 
        return (
        <div>
          <h1>{location.name}</h1>
          <p>{location.lat}</p>
          <p>{location.log}</p>
          <button onClick={ () => {deleteUser(location.id)}}>borrar oficina</button>
        </div>
        );})} 
    </div>
  )
}
