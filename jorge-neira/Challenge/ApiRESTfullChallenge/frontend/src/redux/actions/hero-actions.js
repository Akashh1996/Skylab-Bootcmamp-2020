import axios from 'axios';
import actionTypes from './actions-types';

const URL = 'http://localhost:9090/';

function loadHeroesSuccess(heroes) {
  return {
    type: actionTypes.LOAD_HEROES,
    payload: heroes,
  };
}

export default function loadHeroes() {
  return async (dispatch) => {
    try {
      const heroes = await axios.get(URL);
      dispatch(loadHeroesSuccess(heroes.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log((error));
    }
  };
}
