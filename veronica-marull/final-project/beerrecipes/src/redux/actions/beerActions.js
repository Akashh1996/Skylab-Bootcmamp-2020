import actionTypes from './actionTypes';
import axios from 'axios';

function requestBeersSuccess (beersList) {
  return {
    type: actionTypes.LOAD_BEERS,
    beersList
  };
}

function requestBeersError (error) {
  return {
    type: actionTypes.LOAD_BEERS_ERROR,
    error
  };
}

export function requestBeers () {
  return async (dispatch) => {
    const endpoint = 'https://api.punkapi.com/v2/beers';

    try {
      const beers = await axios.get(endpoint);
      dispatch(requestBeersSuccess(beers.data));
    } catch (error) {
      dispatch(requestBeersError(error));
    }
  };
}

function requestBeerDetail (beerDetail) {
  return {
    type: actionTypes.LOAD_BEER_DETAIL,
    beerDetail
  };
}

function requestBeerDetailError (error) {
  return {
    type: actionTypes.LOAD_BEER_DETAIL_ERROR,
    error
  };
}

export function beerDetailById (id) {
  return async (dispatch) => {
    const endpoint = `https://api.punkapi.com/v2/beers/${id}/`;

    try {
      const beer = await axios.get(endpoint);

      dispatch(requestBeerDetail(beer.data[0]));
    } catch (error) {
      dispatch(requestBeerDetailError(error));
    }
  };
}

function requestBeersByMalt (listByMalt) {
  return {
    type: actionTypes.LOAD_BEERS_BY_MALT,
    listByMalt
  };
}

function requestBeersByMaltError (error) {
  return {
    type: actionTypes.LOAD_BEERS_BY_MALT_ERROR,
    error
  };
}

export function beersByMalt (maltName) {
  return async (dispatch) => {
    const endpoint = `https://api.punkapi.com/v2/beers?malt=${maltName}`;

    try {
      const listMalt = await axios.get(endpoint);
      dispatch(requestBeersByMalt(listMalt.data));
    } catch (error) {
      dispatch(requestBeersByMaltError(error));
    }
  };
}

export function filterBeers (searchTerm) {
  return {
    type: actionTypes.FILTER_BEERS,
    searchTerm: searchTerm || ''
  };
}

function requestBeersByHops (listByHop) {
  return {
    type: actionTypes.LOAD_BEERS_BY_HOP,
    listByHop
  };
}

function requestBeersByHopsError (error) {
  return {
    type: actionTypes.LOAD_BEERS_BY_HOP_ERROR,
    error
  };
}

export function beersByHop (hopName) {
  return async (dispatch) => {
    const endpoint = `https://api.punkapi.com/v2/beers?hops=${hopName}`;

    try {
      const listHop = await axios.get(endpoint);
      dispatch(requestBeersByHops(listHop.data));
      console.log(listHop);
    } catch (error) {
      dispatch(requestBeersByHopsError(error));
    }
  };
}
