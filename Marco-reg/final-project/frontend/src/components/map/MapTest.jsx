/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  GoogleMap, useLoadScript, Marker,
} from '@react-google-maps/api';
import './mapTest.css';
import mapStyles from './mapStyles';

const mapContainerStyle = {

  height: '100vh',

};

const center = {
  lat: 41.385063,
  lng: 2.14,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDZ47kWyh51pVo7LVbUloOsUUysWvocKfY',
    libraries: ['places'],
  });
  const [markers, setMarkers] = useState([]);

  if (loadError) return 'loading Error';
  if (!isLoaded) return 'loading Maps';
  return (
    <>
      <h1>TEST</h1>
      <GoogleMap
        id="map-detail"
        mapContainerStyle={mapContainerStyle}
        options={options}
        zoom={8}
        center={center}
        onClick={(event) => {
          setMarkers((state) => [...state, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
          }]);
          console.log(event);
        }}
      >
        {markers.map((marker) => <Marker key={marker.time} position={{ lat: marker.lat, lng: marker.lng }} />)}
      </GoogleMap>
      ,
    </>
  );
}
