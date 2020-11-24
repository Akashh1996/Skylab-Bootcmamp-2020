/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProject } from '../../redux/actions/projectActions';

function ProjectDetail({ match, projectDetail, dispatch }) {
  const [projectId] = useState(match.params.projectId);
  useEffect(() => {
    if (projectId) {
      dispatch(loadProject(projectId));
    }
  }, []);
  return (
    <main>
      <h1 id="sectionDetail">Projects</h1>
      {projectDetail
      && (
      <div>
        <h2 id="titleDetail">{projectDetail.name}</h2>
        <h3 id="descriptionDetail">{projectDetail.description}</h3>
      </div>
      )}
    </main>
  );
}

ProjectDetail.propTypes = {
  projectDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    projectDetail: state.projectReducer,
  };
}

export default connect(mapStateToProps)(ProjectDetail);
