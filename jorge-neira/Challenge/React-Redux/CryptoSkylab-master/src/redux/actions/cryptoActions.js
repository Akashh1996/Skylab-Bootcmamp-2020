import axios from 'axios';
import actionTypes from '../redux-types';

const API = `https://api.coingecko.com/api/v3/`;

function loadCoinsListSuccess(currencies) {
	return {
		type: actionTypes.LOAD_COINS_LIST,
		payload: currencies
	};
}

function loadCoinsListFailure(error) {
	return {
		type: actionTypes.ERROR_LOADING_DATA,
		payload: error
	};
}

export const loadCoinsList = (per_page, page) => async (dispatch) => {
	const url = `coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%`;
	try {
		const coinListResponse = await axios.get(`${API}${url}`);
		debugger;
		dispatch(loadCoinsListSuccess(coinListResponse.data));
	} catch (error) {
		debugger;
		dispatch(loadCoinsListFailure(error));
	}
};
