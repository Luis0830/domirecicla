import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {AiFillPhone} from 'react-icons/ai'
import {RiRecycleFill} from 'react-icons/ri'
import {TbLocationFilled} from 'react-icons/tb'



const GoogleMaps = ({locations}) => {
  const mapStyles = {        
    height: "50vh",
    width: "80%",
    borderRadius: "25px"};
    
  const defaultCenter = {
    lat: 18.494687988278304, lng: -69.87852322410308
  }

  // Agrega un nuevo estado para almacenar el marcador seleccionado
  const [selected, setSelected] = useState(null);

  // Establece los colores personalizados para el mapa
  const mapOptions = {
    styles: [
      {
        "featureType": "water",
        "stylers": [
          {
            "color": "#73A9AD"
          }
        ]
      },
      // {
      //   "featureType": "land",
      //   "stylers": [
      //     {
      //       "color": "#9DC08B"
      //     }
      //   ]
      // }
    ]
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}
        options={mapOptions}> // Aplica las opciones del mapa aquí
        { /* We map over the locations here to create a new Marker for each location */ }
        {locations.map((location, index) => 
          <Marker 
            key={index} 
            position={{lat: location.lat, lng: location.lng}}
            onClick={() => {  // Agrega un manejador de clics al marcador
              setSelected(location);
            }}
          />)}
        { /* Renderiza la ventana de información si un marcador ha sido seleccionado */ }
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div className='font-bold'>
              <h2 className='text-blue'>Oficina: <span className='text-black'>{selected.lugar}</span></h2>
              <p className='text-blue'>Horario: <span className='text-black'>{selected.horario}</span></p>
              <p><RiRecycleFill className='mr-2 inline text-blue text-[20px]'/>{selected.tipo}</p> 
              <p><AiFillPhone className='mr-2 inline text-blue text-[14px]' /><span text-blue></span>{selected.contacto}</p>
              <p>
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`} 
          target="_blank"
          rel="noopener noreferrer"
          className='underline text-blue'
        >
          <TbLocationFilled className='mr-2 inline text-blue text-[14px]'/>Navegar aquí
        </a>
      </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps;
