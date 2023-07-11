import React, { useEffect, useRef } from "react";

function GoogleMap({ lat, lng, zoom }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom,
    });
  }, [lat, lng, zoom]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
}

export default GoogleMap;