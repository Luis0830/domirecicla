import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
  const googleMapRef = useRef(null);
  
  useEffect(() => {
    const googleScript = document.createElement('script');
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`;
    googleScript.async = true;
    googleScript.defer = true;
    window.document.body.appendChild(googleScript);
    googleScript.addEventListener('load', function() {
      createGoogleMap();
    });
  }, []);

  const createGoogleMap = () => {
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 16,
      center: {
        lat: 43.642567,
        lng: -79.387054,
      },
      disableDefaultUI: true,
    });
  };

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: '400px', height: '300px' }}
    />
  );
};

export default GoogleMap;