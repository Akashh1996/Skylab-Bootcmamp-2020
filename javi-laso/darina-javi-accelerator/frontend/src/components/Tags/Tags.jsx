import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Tags.css';

function Tags({ project }) {
  return (
    <ul className="tags-list">
      {project && project.categories?.map((tag) => (
        <li key={performance.now() * Math.random()} className="tag">{tag}</li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  project: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    projects: state.projectsReducer.projects,
  };
}

export default connect(mapStateToProps)(Tags);
