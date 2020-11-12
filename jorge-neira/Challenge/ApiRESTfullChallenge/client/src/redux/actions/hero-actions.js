import axios from 'axios';
import actionTypes from './actions-types';

const URL = 'http://localhost:9090/';

function loadHeroesSuccess(heroes) {
  debugger;
  return {
    type: actionTypes.LOAD_HEROES,
    payload: heroes,
  };
}

export default function loadHeroes() {
  debugger;
  return async (dispatch) => {
    try {
      // debugger;
      const heroes = await axios.get(URL);
      // eslint-disable-next-line no-debugger
      debugger;
      dispatch(loadHeroesSuccess(heroes.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log((error));
    }
  };
}
