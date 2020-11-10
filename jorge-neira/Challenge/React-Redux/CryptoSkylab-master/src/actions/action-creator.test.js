import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
import {
	loadCoinsList,
	saveOnFavoriteList,
	removeFromFavoriteList
} from './action-creator';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('Test ActionCreator file', () => {
	test('Should return array of currencies loadCoinsList', async () => {
		//arrange
		axios.mockImplementationOnce(() =>
			Promise.resolve({
				data: [
					{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' },
					{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
					{ id: 'tether', name: 'Tether', symbol: 'usdt' },
					{ id: 'litcoin', name: 'Litcoin', symbol: 'ltc' }
				]
			})
		);
		//act
		await loadCoinsList(4, 1);
		console.log(axios.mock.calls);
		//assert
		// expect(axios.mock.calls[0][0]).toBe(
		// 	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=4&page=1&sparkline=true&price_change_percentage=1h%2C24h%'
		// );
	});

	xtest('saveOnFavoriteList', () => {});
});
