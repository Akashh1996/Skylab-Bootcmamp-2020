import axios from 'axios';
import actionTypes from './actions-types';

const URL = 'http://localhost:9090/';

function requestHeroesListSuccess(heroesList) {
  return {
    type: actionTypes.LOAD_HEROES,
    heroesList,
  };
}
export default function loadHeroes() {
  debugger;
  return async (dispatch) => {
    debugger;
    try {
      const heroes = await axios.get(URL);
      dispatch(requestHeroesListSuccess(heroes.data));
    } catch (error) {
      debugger;
      // eslint-disable-next-line no-console
      console.log((error));
    }
  };
}
