import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = ({ data }) => {
  const lat = data?.geo?.lat;
  const lng = data?.geo?.lng;
  const city = data?.city;
  const position = [parseFloat(lat), parseFloat(lng)];
  console.log(lat);
  console.log(lng);
  return (
    <div className="overflow-hidden w-full h-full">
      <MapContainer
        center={position}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
