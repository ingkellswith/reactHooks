import React, { useState, useEffect, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      //element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullScreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
      document.msExitFullScreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App6() {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className="App6">
      <div ref={element}>
        <img
          src="https://images.unsplash.com/photo-1605940169840-953b98c0ed40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <button onClick={exitFull}>Exit fullscreen</button>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    </div>
  );
}
