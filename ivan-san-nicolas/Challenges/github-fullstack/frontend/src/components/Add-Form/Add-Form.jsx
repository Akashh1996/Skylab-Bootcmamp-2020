/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import './Add-Form.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../../redux/actions/gitActions';

function AddForm({ dispatch }) {
  let projectTitle = document.getElementById('project-title')?.value;
  let projectDescription = document.getElementById('project-description')?.value;
  let githubURL = document.getElementById('github-link')?.value;
  const user = {
    _id: '5fbabc82355c2e34a8656cff',
  };

  function sendForm(
    dispatch, addProject, projectTitle, projectDescription, githubURL, participants, creator,
  ) {
    debugger;
    dispatch(addProject(projectTitle, projectDescription, githubURL, participants, creator));
  }

  return (
    <div className="add-form__container">
      <div className="add-form__title-field">
        <label htmlFor="project-title" className="project-title-label">
          <p>Project Title: </p>
          {' '}
          {' '}
          {' '}
          <input type="text" id="project-title" placeholder="Enter the name of your project" onChange={(event) => (projectTitle = event.target.value)} required />
        </label>
      </div>

      <div className="add-form__description-field">
        <label htmlFor="project-description" className="project-description-label">
          <p>Project Description: </p>
          {' '}
          {' '}
          {' '}
          <textarea type="text" id="project-description" rows="10" placeholder="Include relevant information of your project...(optional)" onChange={(event) => (projectDescription = event.target.value)} />
        </label>
      </div>

      <div className="add-form__github-link-field">
        <label htmlFor="github-link" className="github-link-label">
          <p>Github URL: </p>
          {' '}
          {' '}
          {' '}
          <input type="url" id="github-link" placeholder="Add the link to project repository" onChange={(event) => (githubURL = event.target.value)} required />
        </label>
      </div>
      <div className="button-container">
        <button type="button" className="create-button" onClick={() => sendForm(dispatch, addProject, projectTitle, projectDescription, githubURL, [], user._id)}>Create Project</button>
        <button type="button" className="cancel-button" onClick={() => window.history.back()}>Cancel</button>
      </div>
    </div>

  );
}

AddForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddForm);
