import React, { useState, useEffect } from "react";

function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const handleOrientation = (event) => {
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    });
  };
  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientation, true);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  const { alpha, beta, gamma } = orientation;
  return { alpha, beta, gamma };
}

export default function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();
  return (
    <div>
      <ul>
        <li>Alpha:{alpha ? alpha : "null"}</li>
        <li>Beta:{beta ? beta : "null"}</li>
        <li>Gamma:{gamma ? gamma : "null"}</li>
      </ul>
    </div>
  );
}
