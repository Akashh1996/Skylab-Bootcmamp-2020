/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import('./Detail.css');

function Detail({ projectItem }) {
  // const projectId = match?.params?.projectId;

  // if (!projectItem.length) {
  //   dispatch(loadProject(projectId));
  // }
  console.log(projectItem);
  const project = {
    participants: [
      {
        _id: '5fb99c739186e7099bffe756',
        name: 'Peach',
        profilePic: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/60846d167fee2d36831d9b4528bb01e4/5897153.png',
        githubUrl: 'https://github.com/Ivansannicolas?tab=repositories',
        __v: 0,
      },
      {
        _id: '5fb864a81a3b513066e3171a',
        name: 'Mario',
        profilePic: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/d047e04f9babccb3f0d3503745f4e8ad/47951339.png',
        githubUrl: 'https://github.com/Ivansannicolas?tab=repositories',
        __v: 0,
      },
    ],
    _id: '5fb87335e650cf04b29bde67',
    creator: {
      _id: '5fb864a81a3b513066e3171a',
      name: 'Mario',
      profilePic: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/d047e04f9babccb3f0d3503745f4e8ad/47951339.png',
      githubUrl: 'https://github.com/Ivansannicolas?tab=repositories',
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: 'Test project',
    url: 'https://github.com/SkylabCoders/skylab-bootcamp-202010',
  };

  const [projectName, setProjectName] = useState(project.name);
  const [projectDescription, setProjectDescription] = useState(project.description);

  function changeColor(buttonId) {
    const button = document.getElementById(buttonId);
    if (button.style.backgroundColor === 'red') {
      button.style.backgroundColor = 'rgb(136, 202, 38)';
      button.textContent = 'Subscribe';
    } else {
      button.style.backgroundColor = 'red';
      button.textContent = 'Unsubscribe';
    }
  }

  return (
    <section className="detail">
      {project.name ? (
        <div className="detail__project">
          <div className="detail__project__top">
            <div className="detail__project__top__details">
              <input className="detail__project__top__detail project__name" value={projectName} onChange={(event) => setProjectName(event.target.value)} />
              <textarea className="detail__project__top__detail project__description" value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} />
              <a href={project.url} className="detail__project__top__detail project__url">
                <img
                  src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/5496df86ebb26ef995c853b7c6212841/icons8-github-48.png"
                  alt="github-icon"
                  className="project__url__github-icon"
                />
                <span>Github repository</span>
              </a>
            </div>
            <div className="detail__project__top__subscribe">
              <button type="button" className="subscribe__button" id={`${project._id}-button`} onClick={() => changeColor(`${project._id}-button`)}>Subscribe</button>
            </div>
          </div>
          <div className="detail__project__bottom">
            <div className="detail__project__bottom__participants">
              <h4>Participants:</h4>
              <div className="detail__project__bottom__participants__block">
                {project.participants.length ? (project.participants.map((participant) => (
                  <a href={participant.githubUrl} className="detail__project__bottom__participant">
                    <img src={participant.profilePic} alt={`${participant.name}-profile-pic`} className="detail__project__bottom__detail participant__profile-pic" />
                    <p className="detail__project__bottom__detail participant__name">{participant.name}</p>
                  </a>
                ))) : (
                  <div className="detail__project__bottom__participants__empty">
                    <h3>There are no participants yet...</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>NO PROJECTS</h1>
      )}
    </section>
  );
}

Detail.propTypes = {
  projectItem: PropTypes.shape([{
    _id: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    participants: PropTypes.shape([]).isRequired,
    url: PropTypes.string.isRequired,
  }]).isRequired,
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps({ gitReducer }) {
  return {
    projectItem: gitReducer.projectItem,
  };
}

export default connect(mapStateToProps)(Detail);
