import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as storeDate from "./data/{...}zarina-stores";

export const Mapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.4941311,
    longitude: 30.3568245,
    width: "60vw",
    height: "70vh",
    zoom: 10
  });
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedStore(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoidGVyemluYSIsImEiOiJjazg4cmg0N2kwYW5hM2twbDNnbDdvYndzIn0.bMki4_taww7ICA42UAuAzQ"
        }
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {storeDate.features.map(store => (
          <Marker
            key={store.properties.STORE_ID}
            latitude={store.geometry.coordinates[1]}
            longitude={store.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedStore(store);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/img/location.svg"}
                alt="Location Icon"
              />
            </button>
          </Marker>
        ))}

        {selectedStore ? (
          <Popup
            latitude={selectedStore.geometry.coordinates[1]}
            longitude={selectedStore.geometry.coordinates[0]}
            onClose={() => {
              setSelectedStore(null);
            }}
          >
            <div>
              <h2>{selectedStore.properties.NAME}</h2>
              <p>{selectedStore.properties.ADDRESS}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};
