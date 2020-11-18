import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTvShows } from '../actions/listActions';

function List({ tvShows, dispatch }) {
  if (!tvShows) {
    dispatch.getTvShows();
  }

  return (
    <>
      <h1>Tv Shows</h1>
      <input type="text" placeholder="Name" />
      <button type="button">Add</button>
      <ul>
        {tvShows
          && tvShows.map((tvShow) => (<li>{tvShow.name}</li>))}
      </ul>
    </>
  );
}

List.propTypes = {
  tvShows: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.shape({
    getTvShows: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    tvShows: state.listReducer.tvShows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({ getTvShows }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
