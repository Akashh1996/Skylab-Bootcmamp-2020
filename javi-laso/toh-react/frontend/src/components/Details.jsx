import React from 'react';
import './Details.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';

function Details({ hero }) {
  return (
    <div className="d-flex flex-column details">
      <h2 className="mb-4">
        {hero.name}
        {' '}
        details!
      </h2>
      <div className="d-flex mb-4">
        <div className="d-flex flex-column mr-3">
          <span className="label">id: </span>
          <span className="label">name: </span>
        </div>
        <div className="d-flex flex-column">
          <span className="data">{hero.id}</span>
          <input className="data" value={hero.name} readOnly />
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps({ heroReducer }) {
  return {
    hero: heroReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
