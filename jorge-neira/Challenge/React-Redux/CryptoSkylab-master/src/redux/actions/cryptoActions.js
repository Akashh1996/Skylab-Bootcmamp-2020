import axios from 'axios';
import reduxActionTypes from '../redux-types';

const API = `https://api.coingecko.com/api/v3/`;

export async function loadCoinsList(per_page, page) {
	debugger;
	const url = `coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%`;
	try {
		const coinsList = await axios.get(`${API}${url}`);
		debugger;
		return {
			type: reduxActionTypes.LOAD_COINS_LIST,
			payload: coinsList
		};
	} catch (error) {
		return {
			type: reduxActionTypes.ERROR_LOADING_DATA,
			payload: error
		};
	}
}

// function actionSomething(){
// 	return function(dispatch){
// 		// acxios
// 		dispatch(//accion que recibe datos)
// 	}
// }

// function loQueSea(data){
// 	return {
// 		type
// 	}
// }
