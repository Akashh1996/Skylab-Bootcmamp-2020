import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProject } from '../../redux/actions/gitActions';

import('./Landing.css');

function Detail({ projectItem, dispatch }) {
  return (
    <section className="landing">
      {projectItem.name ? (<p>There is a project</p>) : (<h1>NO PROJECTS</h1>)}
    </section>
  );
}

Detail.propTypes = {
  projectItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    participants: PropTypes.shape([]).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ gitReducer }) {
  return {
    projectItem: gitReducer.projectItem,
  };
}

export default connect(mapStateToProps)(Detail);
