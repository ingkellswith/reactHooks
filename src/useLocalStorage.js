import React, { useState, useEffect } from "react";

function useLocalStorage(name, initialValue) {
  const [currentLS, updateLS] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(name, initialValue);
    updateLS(initialValue);
    return () => {
      localStorage.setItem(name, null);
      updateLS(null);
    };
  }, []);
  const setLS = (updatedValue) => {
    if (updatedValue) {
      localStorage.setItem(name, updatedValue);
      updateLS(updatedValue);
    } else {
      localStorage.setItem(name, null);
      updateLS(updatedValue);
    }
  };
  return [currentLS, setLS];
}

export default function App() {
  const name = "Ingkellswith";
  const initialValue = 12345;
  const [currentLS, setLS] = useLocalStorage(name, initialValue);
  return (
    <div>
      <ul>
        <li>Current Value: {currentLS}</li>
        <button onClick={() => setLS("12345")}>Set Value: 12345</button>
        <button onClick={() => setLS(null)}>Clear LS</button>
      </ul>
    </div>
  );
}
