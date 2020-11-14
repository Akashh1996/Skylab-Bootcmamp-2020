/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

export function addHero(hero) {
  return {
    type: actionTypes.ADD_HERO,
    hero,
  };
}

export function deleteHero(hero) {
  return {
    type: actionTypes.DELETE_HERO,
    hero,
  };
}

export function loadHero() {
  return async (dispatch) => {
    debugger;
    const { data } = await axios('htpp://localhost:1240/heroes');
    debugger;
    dispatch({ type: actionTypes.LOAD_HERO, data });
  };
  // eslint-disable-next-line indent
}
