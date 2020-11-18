import axios from 'axios';
import actionTypes from './action-types';

const apiURL = 'http://localhost:5500/tvshows';

export const getTvShowsSucceed = (tvShows) => ({
  type: actionTypes.GET_TVSHOW,
  tvShows,
});

export const getTvShows = () => async (dispatch) => {
  const response = await axios.get(apiURL);
  dispatch(getTvShowsSucceed(response.data));
};
