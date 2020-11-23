/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProjects, createProject } from '../../redux/actions/projectActions';
import './ProjectList.css';

function ProjectList({ projectList, dispatch }) {
  const [newParticipants, setNewParticipants] = useState([]);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newurl, setNewUrl] = useState('');
  const [newCreator, setNewCreator] = useState('');

  const newProject = {
    participants: newParticipants,
    name: newName,
    description: newDescription,
    curl: newurl,
    creator: newCreator,
  };

  useEffect(() => {
    if (!projectList || projectList?.length === 0) {
      dispatch(loadProjects());
    }
  }, [projectList, projectList?.length]);

  return (
    <main>
      <h1>Projects</h1>
      {projectList && projectList?.length
        && projectList.map((project) => (
          <Link to={`/project/${project._id}`}>
            <li key={`${project._id}_li`}>
              <span key={`${project._id}_name`}>{project.name}</span>
              <span key={`${project._id}_descrip`}>{project.description}</span>
              <span key={`${project._id}_creator`}>
                Creator:
                {' '}
                {project.creator}
              </span>
            </li>
          </Link>
        ))}
      <input
        onChange={(event) => setNewParticipants((event.target.value).split(' '))}
        value={newParticipants}
        placeholder="Enter new participants"
      />
      <input
        onChange={(event) => setNewName(event.target.value)}
        value={newName}
        placeholder="Enter a new name"
      />
      <input
        onChange={(event) => setNewDescription(event.target.value)}
        value={newDescription}
        placeholder="Enter a new description"
      />
      <input
        onChange={(event) => setNewUrl(event.target.value)}
        value={newurl}
        placeholder="Enter a new url"
      />
      <input
        onChange={(event) => setNewCreator(event.target.value)}
        value={newCreator}
        placeholder="Enter a new creator"
      />
      <button type="button" onClick={() => dispatch(createProject(newProject))}>Add Project</button>
    </main>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    projectList: state.projectReducer,
  };
}

export default connect(mapStateToProps)(ProjectList);
