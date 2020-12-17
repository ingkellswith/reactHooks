import React, { useState, useEffect } from "react";

function useFavicon(faviconurl) {
  const [value, setValue] = useState(faviconurl);
  const htmlFavicon = document.querySelector("link[rel = 'icon']");
  const updateValue = () => {
    htmlFavicon.setAttribute("href", value);
  };
  return updateValue;
}

export default function App() {
  const initialFaviconurl =
    "https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico";
  const newFaviconurl = "https://nomadcoders.co/m.png";
  const setFavicon = useFavicon(initialFaviconurl);
  return (
    <div>
      <button onClick={() => setFavicon(newFaviconurl)}>Change Favicon</button>
    </div>
  );
}
