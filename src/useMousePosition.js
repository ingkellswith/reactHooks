import React, { useState, useEffect } from "react";

function useMousePosition() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const onMouseMove = (event) => {
    setX(event.offsetX);
    setY(event.offsetY);
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return { x, y };
}

export default function App() {
  const { x, y } = useMousePosition();
  return (
    <div>
      <ul>
        <li>Mouse X : {x}</li>
        <li>Mouse Y : {y}</li>
      </ul>
    </div>
  );
}
