import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      console.log(current, "커런트");
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 3);
  return (
    <div className="App3">
      <h1 ref={fadeInH1.ref} style={fadeInH1.style}>
        hello
      </h1>
      <p {...fadeInP}>lalalalala</p>
    </div>
  ); //css는 style={{opacity: 0 }}이렇게 사용
}
