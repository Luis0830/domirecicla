import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = ({locations}) => {
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 19.031994646098433, lng: -70.24468730055588
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={8}
        center={defaultCenter}>
        { /* We map over the locations here to create a new Marker for each location */ }
        {locations.map((location, index) => 
          <Marker 
            key={index} 
            position={{lat: location.lat, lng: location.lng}} 
          />)}
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps;
