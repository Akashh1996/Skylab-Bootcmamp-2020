import axios from 'axios';
import actionTypes from '../actions/action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function loadCoinsList(per_page, page) {
	try {
		const coinsList = await axios.request(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%`
		);
		dispatcher.dispatch({
			type: actionTypes.LOAD_COINS_LIST,
			payload: coinsList.data
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.ERROR_LOADING_DATA,
			payload: error
		});
	}
}

export function saveOnFavoriteList(currencyData) {
	dispatcher.dispatch({
		type: actionTypes.ADD_TO_FAVORITE_LIST,
		payload: currencyData
	});
}

export function removeFromFavoriteList(currencyId) {
	dispatcher.dispatch({
		type: actionTypes.REMOVE_FROM_FAVORITE_LIST,
		payload: currencyId
	});
}
