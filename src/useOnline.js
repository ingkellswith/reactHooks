import React, { useState, useEffect } from "react";

function useOnline() {
  const [status, setStatus] = useState(navigator.onLine); //navigator.onLine은 true or false반환
  const handleChange = () => {
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
}
export default function App() {
  const isOnline = useOnline();
  return (
    <div>
      <h1>Are we online? {isOnline ? "Yes" : "No"}</h1>
    </div>
  );
}
