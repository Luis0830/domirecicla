import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase/confi';


export default function Location() {
 
    const handleAdd = async (e) => {
    e.preventDefault()
    try {
        
    const res = await addDoc(collection(db, "cities"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
    } catch (error) {
      console.log(error)  
    }
 }

  return (
    <div>
        <form onSubmit={handleAdd}>
            <h1>agregar nueva sucursal</h1>
            <input type="text" />
            <button>agregar</button>
        </form>
    </div>
  )
}
