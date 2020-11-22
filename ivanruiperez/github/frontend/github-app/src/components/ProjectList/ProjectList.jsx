/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProjects } from '../../redux/actions/projectActions';
import './ProjectList.css';

const img = 'https://image.flaticon.com/icons/png/512/69/69926.png';
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
          <div className="projectBox">
            <div className="projectsImg"><img src={img} alt="" /></div>
            <div className="projects">
              <Link to={`/project/${project._id}`}>
                <li key={`${project._id}_li`}>
                  <span key={`${project._id}_name`}>
                    Project name:
                    {' '}
                    <br />
                    {project.name}
                  </span>
                  <span key={`${project._id}_descrip`}>
                    description:
                    {' '}
                    <br />
                    {project.description}
                  </span>
                  <span key={`${project._id}_creator`}>
                    Creator:
                    {' '}
                    {project.creator}
                  </span>
                </li>
              </Link>
            </div>
          </div>
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
