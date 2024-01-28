import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState({
    ip: "-",
    city: "-",
    region: "-",
    country: "-",
    timezone: "-",
    isp: "-",
    lat: 0,
    lon: 0,
  });
  const [dataFetched, setDataFetched] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = async (id) => {
    let ip = document.getElementById(id).value;
    try {
      setSpinner(true);
      let response = await fetch(`/.netlify/functions/geo?ip=${ip}`);
      let data = await response.json();
      setData({
        ip: data.ip || "-",
        city: data.location.city || "-",
        region: data.location.region || "-",
        country: data.location.country || "-",
        timezone: data.location.timezone || "-",
        isp: data.isp || "-",
        lat: data.location.lat || 0,
        lon: data.location.lng || 0,
      });
      setDataFetched(true);
      setSpinner(false);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} data={data} spinner={spinner}/>
      <Card data={data} display={dataFetched}/>
      {data.lat !== 0 && data.lon !== 0 && <Map data={data} spinner={spinner} />}
    </div>
  );
}

export default App;
