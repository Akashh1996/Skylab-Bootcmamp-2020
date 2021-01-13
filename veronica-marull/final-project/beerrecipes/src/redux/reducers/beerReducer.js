import actionTypes from '../actions/actionTypes';

export default function beerReducer (state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_BEERS: {
      const beers = { ...state, beersList: action.beersList, displayBeers: action.beersList };
      return beers; }

    case actionTypes.LOAD_BEERS_ERROR: {
      const beerError = { ...state, error: action.error };
      return beerError; }

    case actionTypes.LOAD_BEER_DETAIL: {
      const detail = { ...state, beerDetail: action.beerDetail };
      return detail; }

    case actionTypes.LOAD_BEERS_BY_MALT: {
      const beerMalt = { ...state, listByMalt: action.listByMalt };
      return beerMalt;
    }
    case actionTypes.LOAD_BEERS_BY_MALT_ERROR: {
      const maltError = { ...state, error: action.error };
      return maltError;
    }

    case actionTypes.FILTER_BEERS: {
      const displayBeers = state.beersList.filter((beer) => beer.name.toLowerCase().includes(action.searchTerm.toLowerCase()));

      const beersSearch = { ...state, displayBeers };
      return beersSearch;
    }

    case actionTypes.LOAD_BEERS_BY_HOP: {
      const beerHop = { ...state, listByHop: action.listByHop };
      return beerHop;
    }

    case actionTypes.LOAD_BEERS_BY_HOP_ERROR: {
      const hopError = { ...state, error: action.error };
      return hopError;
    }

    default: {
      return state;
    }
  }
}
