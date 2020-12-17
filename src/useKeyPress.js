import React, { useState, useEffect } from "react";

function useKeyPress(letter) {
  const [value, setValue] = useState();
  const keyDownHandler = (event) => {
    if (event.key === letter) setValue(true);
  };
  const keyUpHandler = (event) => {
    if (event.key === letter) setValue(false);
  };
  useEffect(() => {
    document.addEventListener("keypress", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
  }, []);
  return value;
}

export default function App() {
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");
  return (
    <div>
      <ul>
        <li>Pressed 'k': {kPressed && "K"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
        <li>Pressed 'm': {mPressed && "M"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 'h': {hPressed && "H"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
      </ul>
    </div>
  );
}
