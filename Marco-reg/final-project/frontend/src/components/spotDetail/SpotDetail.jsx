/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {

  GoogleMap, useLoadScript, Marker,
} from '@react-google-maps/api';

import { requestSpot } from '../../redux/actions/spotActions';

import './spotDetail.css';
import mapStyles from '../map/mapStyles';

const mapContainerStyle = {

  height: '50vh',

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

function SpotDetail({ spot, dispatch }) {
  const { spotId } = useParams();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDZ47kWyh51pVo7LVbUloOsUUysWvocKfY',
    libraries: ['places'],
  });

  useEffect(() => {
    if (!spot || !spot.name) {
      dispatch(requestSpot(spotId));
    }
  }, []);
  if (loadError) return 'loading Error';
  if (!isLoaded) return 'loading Maps';

  return (
    <>
      <section id="spot-detail-wrapper">

        <div id="spot_name">
          {spot?.spotName}
        </div>

        <div id="linebreak-detail" />
        <img
          alt="spotterini"
          id="image_random"
          src={spot?.spotImage?.length === 0
            ? 'https://cdn.discordapp.com/attachments/631186181610143771/777141944320131112/ShoveItAnimation.gif'
            : spot?.spotImage[1]}
        />

        <div id="linebreak-detail" />
        <div id="video-description">
          <p id="description">
            {' '}

            {spot?.spotDescription}
          </p>
        </div>

        <div id="linebreak-detail" className="location">
          <img
            alt="spotterini"
            id="image_random"
            src={spot?.spotImage?.length === 0
              ? 'https://cdn.discordapp.com/attachments/631186181610143771/777141944320131112/ShoveItAnimation.gif'
              : spot?.spotImage[2]}
          />
          <div className="linebreak-vertical" />
          <p id="spot-location">{spot?.spotLocation}</p>
        </div>
        <div id="description-map">
          <p id="description-map-text">Map</p>

          <GoogleMap
            id="map-detail"
            mapContainerStyle={mapContainerStyle}
            options={options}
            zoom={10}
            center={center}
          >
            <Marker key="lalala" position={{ lat: spot?.lat, lng: spot?.lng }} />

          </GoogleMap>
        </div>

      </section>

    </>
  );
}

function mapStateToProps({ spotReducer }) {
  return {
    spot: spotReducer.spot,
  };
}

export default connect(mapStateToProps)(SpotDetail);
