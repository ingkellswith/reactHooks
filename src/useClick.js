import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") return;
  const element = useRef(); //useRef()한시점에서 jsx로가서 ref를 받아오는 듯
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default App = () => {
  /* const potato = useRef();
  setTimeout(() => potato.current?.focus(), 5000);
  return (
    <div className="App">
      <input ref={potato} placeholder="la" />//{potato}에는 useRef()에서 리턴된 값이 들어간다.
    </div> */
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
