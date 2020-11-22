/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProjects, updateProject } from '../../redux/actions/gitActions';

import('./Landing.css');

function Landing({ projectList, dispatch }) {
  debugger;
  if (projectList.length === 0) {
    dispatch(loadProjects());
  }

  const user = {
    _id: '5fb864a81a3b513066e3171a',
    name: 'Mario',
    profilePic: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/d047e04f9babccb3f0d3503745f4e8ad/47951339.png',
    githubUrl: 'https://github.com/Ivansannicolas?tab=repositories',
  };

  function addUserToParticipants(newParticipant, project) {
    const updatedProject = { ...project };
    let wasParticipant = false;

    project.participants.forEach((participant) => {
      if (participant._id === newParticipant._id) {
        updatedProject.participants = project.participants.filter(
          (filterParticipant) => filterParticipant._id !== newParticipant._id,
        );
        wasParticipant = true;
      }
    });

    if (!wasParticipant) {
      updatedProject.participants.push(newParticipant._id);
    }
    dispatch(updateProject(project._id, updatedProject));
  }

  return (
    <section className="landing">
      {projectList.length ? projectList.map((project) => (
        <div className="landing__project">
          <div className="landing__project__top">
            <div className="landing__project__top__details">
              <p className="landing__project__top__detail project__name">{project.name}</p>
              <p className="landing__project__top__detail project__description">{project.description}</p>
              <a href={project.url} className="landing__project__top__detail project__url">
                <img
                  src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/5496df86ebb26ef995c853b7c6212841/icons8-github-48.png"
                  alt="github-icon"
                  className="project__url__github-icon"
                />
                <span>Github repository</span>
              </a>
            </div>
            <div className="landing__project__top__subscribe">
              <button type="button" className="subscribe__button" onClick={() => addUserToParticipants(user, project)}>Subscribe</button>
            </div>
          </div>
          <div className="landing__project__bottom">
            <div className="landing__project__bottom__participants">
              <h4>Participants:</h4>
              {project.participants.length ? (project.participants.map((participant) => (
                <a href={participant.githubUrl} className="landing__project__bottom__participant">
                  <img src={participant.profilePic} alt={`${participant.name}-profile-pic`} className="landing__project__bottom__detail participant__profile-pic" />
                  <p className="landing__project__bottom__detail participant__name">{participant.name}</p>
                </a>
              ))) : (
                <div className="landing__project__bottom__participants__empty">
                  <h3>There are no participants yet...</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      )) : (
        <h2>There are no projects :/</h2>
      )}
    </section>
  );
}

function mapStateToProps({ gitReducer }) {
  debugger;
  return {
    projectList: gitReducer.projectArray,
  };
}

Landing.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  projectList: {},
};

export default connect(mapStateToProps)(Landing);
