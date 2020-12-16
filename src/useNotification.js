import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

export default function App() {
  const triggerNotif = useNotification("can i steal your heart?", {
    body: "I love kimchi don't you?",
  });

  return (
    <div className="App">
      <button onClick={triggerNotif}>hi</button>
    </div>
  );
}
0;
