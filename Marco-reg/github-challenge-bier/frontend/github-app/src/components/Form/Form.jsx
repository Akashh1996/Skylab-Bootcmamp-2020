/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/listActions';
import './Form.css';

// eslint-disable-next-line no-unused-vars
function Form({ list, dispatch }) {
  const [projectName, setProjectName] = useState('');
  const [projectInfo, setProjectInfo] = useState('');
  const [photo, setPhoto] = useState('');

  return (
    <>
      <form className="form_wrapper">
        <input id="project-name" type="text" value={projectName} onChange={(event) => { setProjectName(event.target.value); }} placeholder="project name" />
        <input id="project-info" type="text" value={projectInfo} onChange={(event) => { setProjectInfo(event.target.value); }} placeholder="project info" />
        <input id="project-photo" type="text" value={photo} onChange={(event) => { setPhoto(event.target.value); }} placeholder="photo url" />
        <button type="submit" id="submit-form" onClick={() => { dispatch(createProject({ projectName, projectInfo, photo })); }}>SUBMIT</button>
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
