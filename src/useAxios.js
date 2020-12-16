import React, { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    //setState({ ...state, loading: true });
    setState({ error: null, data: null, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&APPID=f0ca4cae769efdb95398b56f90b5ff12&units=metric",
  });
  console.log(
    `Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  );
  return (
    <div className="App8">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
