/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProjects } from '../../redux/actions/projectActions';
import './ProjectList.css';

function ProjectList({ projectList, dispatch }) {
  useEffect(() => {
    if (!projectList || projectList.length === 0) {
      dispatch(loadProjects());
    }
  }, []);

  return (
    <main>
      <h1>Projects</h1>
      {projectList && projectList?.length
        && projectList.map((project) => (
          <Link to={`project/${project._id}`}>
            <li key={project._id}>
              <span>{project.name}</span>
              <span>{project.description}</span>
              <span>
                Creator:
                {' '}
                {project.creator}
              </span>
            </li>
          </Link>
        ))}
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
