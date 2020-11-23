/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProject } from '../../redux/actions/gitActions';

import('./Detail.css');

function Detail({ projectItem, dispatch, match }) {
  const projectId = match?.params?.projectId;

  if (!projectItem.length) {
    dispatch(loadProject(projectId));
  }

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
      {projectItem.name ? (
        <div className="detail__project">
          <div className="detail__project__top">
            <div className="detail__project__top__details">
              <input className="detail__project__top__detail project__name" value={projectItem.name} />
              <textarea className="detail__project__top__detail project__description" value={projectItem.description} />
              <a href={projectItem.url} className="detail__project__top__detail project__url">
                <img
                  src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5fb96768be4f1e1ab90b1a74/5496df86ebb26ef995c853b7c6212841/icons8-github-48.png"
                  alt="github-icon"
                  className="project__url__github-icon"
                />
                <span>Github repository</span>
              </a>
            </div>
            <div className="detail__project__top__subscribe">
              <button type="button" className="subscribe__button" id={`${projectItem._id}-button`} onClick={() => changeColor(`${projectItem._id}-button`)}>Subscribe</button>
            </div>
          </div>
          <div className="detail__project__bottom">
            <div className="detail__project__bottom__participants">
              <h4>Participants:</h4>
              <div className="detail__project__bottom__participants__block">
                {projectItem.participants.length ? (projectItem.participants.map((participant) => (
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
  dispatch: PropTypes.func.isRequired,
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
