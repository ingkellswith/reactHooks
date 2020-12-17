import React, { useState, useEffect } from "react";

function useLockScroll() {
  const [isLocked, setLock] = useState(false);
  const body = document.querySelector("body");
  const lockScroll = () => {
    body.style.overflow = "hidden";

    setLock(true);
  };
  const unlockScroll = () => {
    body.style.overflow = "visible";

    setLock(false);
  };

  return [isLocked, { lockScroll, unlockScroll }];
}
export default function App() {
  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
  const a = [isLocked, { lockScroll, unlockScroll }];
  return (
    <div>
      <h1>Is locked? {a[0] ? "Yes" : "No"}</h1>
      <button onClick={() => a[1].lockScroll()}>Lock Scroll</button>
      <button onClick={() => a[1].unlockScroll()}>Unlock Scroll</button>
    </div>
  );
}
