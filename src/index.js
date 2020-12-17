import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import UseDeviceOrientation from "./useDeviceOrientation";
import UseFavicon from "./useFavicon";
import UseGeolocation from "./useGeolocation";
import UseKeyPress from "./useKeyPress";
import UseLocalStorage from "./useLocalStorage";
import UseMousePosition from "./useMousePosition";
import UseOnline from "./useOnline";
import UseLockScroll from "./useLockScroll";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UseDeviceOrientation />
    <UseFavicon />
    <UseGeolocation />
    <UseKeyPress />
    <UseLocalStorage />
    <UseMousePosition />
    <UseOnline />
    <UseLockScroll />
  </React.StrictMode>,
  rootElement
);
