/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/formAction';
import './form.css';

// eslint-disable-next-line no-unused-vars
function Form({ dispatch }) {
  const [spotName, setProjectName] = useState('');
  const [spotStyle, setProjectInfo] = useState('');
  const [spotLocation, setLocation] = useState('');
  const [lat, setLatitud] = useState('');
  const [lng, setLongitude] = useState('');
  const [photo, setPhoto] = useState('');
  const [spotDescription, setDescription] = useState('');

  return (
    <>
      <form className="form_wrapper">
        <div id="cordinates">

          <input id="project-name" type="text" value={spotName} onChange={(event) => { setProjectName(event.target.value); }} placeholder="Spot Name" />
        </div>

        <div id="cordinates">

          <input id="project-main-description" type="text" value={spotDescription} onChange={(event) => { setDescription(event.target.value); }} placeholder="main description" />
        </div>
        <div id="cordinates">

          <input id="project-info" type="text" value={spotStyle} onChange={(event) => { setProjectInfo(event.target.value); }} placeholder="Style" />
        </div>
        <div id="cordinates">

          <input id="project-location" type="text" value={spotLocation} onChange={(event) => { setLocation(event.target.value); }} placeholder="Location" />
        </div>
        <div id="cordinates">

          <input id="project-photo" type="text" value={photo} onChange={(event) => { setPhoto(event.target.value); }} placeholder="photo url" />
        </div>
        <div id="cordinates">
          <input id="project-lat" type="text" value={lat} onChange={(event) => { setLatitud(event.target.value); }} placeholder="latitude" />
          <input id="project-lng" type="text" value={lng} onChange={(event) => { setLongitude(event.target.value); }} placeholder="Longitude" />

        </div>
        <div id="cordinates">

          <button
            type="submit"
            id="submit-form"
            onClick={() => {
              dispatch(createProject({
                spotName, spotStyle, spotLocation, lat, lng, spotDescription,
              }));
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>

    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Form);
