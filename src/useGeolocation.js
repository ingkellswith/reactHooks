import React, { useState } from "react";

function useGeolocation() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [error, setError] = useState();

  function handleGeoSuccess(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    //console.log(lat, long);
  }
  function handleGeoError() {
    setError("Can't access geo location");
  }
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  //console.log(lat, long, error);
  return {
    coords: { lat, long },
    error,
  };
}

export default function App() {
  const {
    coords: { lat, long },
    error,
  } = useGeolocation();
  return (
    <div>
      <ul>
        <li>Latitude :{lat}</li>
        <li>Longitude :{long}</li>
        <li>Geolocation Error :{error ? error : "null"}</li>
      </ul>
    </div>
  );
}
