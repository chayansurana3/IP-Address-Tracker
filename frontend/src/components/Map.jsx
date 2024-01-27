import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from"../images/marker-icon.png";
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: MarkerIcon,
  iconSize: [32, 32], 
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = ({ data }) => {
  const [center, setCenter] = useState([data.lat, data.lon]);
  const mapRef = useRef();

  useEffect(() => {
    setCenter(prevCenter => [data.lat, data.lon]);
    if (mapRef.current) mapRef.current.setView([data.lat, data.lon], 13);
  }, [data]);
  
  return (
    <MapContainer className="-z-0" center={center} zoom={13} style={{ height: "400px" }} ref={mapRef}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />
      <Marker position={center} icon={customIcon}>
        <Popup>Location based on the IP address: <span className="underline">{data.ip}</span></Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;