/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './action-types';

const endpoint = 'http://localhost:4000/';

function addHeroSuccess(heroList) {
  return {
    type: actionTypes.ADD_HERO,
    heroList,
  };
}

export function addHero(hero) {
  return async (dispatch) => {
    try {
      const heroAddedList = await axios.post(endpoint, {
        name: hero.name,
      });

      dispatch(addHeroSuccess(heroAddedList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

function deleteHeroSuccess(heroList) {
  return {
    type: actionTypes.DELETE_HERO,
    heroList,
  };
}

export function deleteHero(heroId) {
  return async (dispatch) => {
    try {
      const heroDeletedList = await axios.delete(endpoint, {
        params: { idHero: heroId },
      });

      dispatch(deleteHeroSuccess(heroDeletedList.data));
    } catch (error) {
      console.log(error);
    }
  };
}

function requestHeroesListSuccess(heroesList) {
  return {
    type: actionTypes.CHARGE_HEROES,
    heroesList,
  };
}

function requestHeroesListFailure(error) {
  return {
    type: actionTypes.CHARGE_HEROES_ERROR,
    error,
  };
}

export function chargeHeroesList() {
  return async (dispatch) => {
    try {
      const heroes = await axios(endpoint);
      dispatch(requestHeroesListSuccess(heroes.data));
    } catch (error) {
      dispatch(requestHeroesListFailure(error));
    }
  };
}

function requestHeroSuccess(hero) {
  return {
    type: actionTypes.GET_HERO,
    hero,
  };
}

export default function requestHero(hero) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${endpoint}${hero.id}`);
      dispatch(requestHeroSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}
