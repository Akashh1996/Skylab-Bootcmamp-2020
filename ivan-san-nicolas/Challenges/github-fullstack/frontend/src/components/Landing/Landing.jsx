/* eslint-disable no-debugger */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProjects } from '../../redux/actions/gitActions';

function Landing({ projectList, dispatch }) {
  debugger;
  if (projectList.length === 0) {
    dispatch(loadProjects());
  }
  return (
    <div>
      {projectList ? projectList.map((project) => <p>{project.name}</p>) : (
        <h2>There are no projects :/</h2>
      )}
    </div>
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
