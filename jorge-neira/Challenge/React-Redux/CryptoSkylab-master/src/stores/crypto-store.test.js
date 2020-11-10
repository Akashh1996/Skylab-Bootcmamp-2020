import cryptoStore from './crypto-store';
import dispatcher from '../dispatcher/dispatcher';
import actionType from '../actions/action-types';

describe('Testing Crypto Store', () => {
	beforeEach(() => {
		cryptoStore.setDefaulSettings();
	});

	describe('test store function', () => {
		test('Should return default value of cryptoCurrenciesList -> null', () => {
			//act
			const response = cryptoStore.getCryptoList();
			//assert
			expect(response).toBeNull();
		});

		test('Should return an array with the passed object', () => {
			//arrange
			const currentObj = { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' };
			//act
			cryptoStore.addToFavorite(currentObj);
			const getFavorite = cryptoStore.getFavoriteCurrencies();
			//assert
			expect(getFavorite).toEqual([
				{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' }
			]);
		});
	});

	describe('Testing flux event listener', () => {
		test('should return test changed to "Listened"', () => {
			//arrange
			let test = '';
			function callback() {
				test = 'Listened';
			}
			//act
			cryptoStore.addEventListener(callback);
			cryptoStore.emitChange();
			//assert
			expect(test).toBe('Listened');
		});
		test('should return test without changes', () => {
			//arrange
			let test = '';
			function callback() {
				test = 'Listened';
			}
			//act
			cryptoStore.addEventListener(callback);
			cryptoStore.removeEventListener(callback);
			cryptoStore.emitChange();
			//assert
			expect(test).toBe('');
		});
	});

	describe('Testing dispatcher register', () => {
		test('Should return obj array of coins', () => {
			//arrange
			dispatcher.dispatch({
				type: actionType.LOAD_COINS_LIST,
				payload: [
					{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' },
					{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
					{ id: 'tether', name: 'Tether', symbol: 'usdt' },
					{ id: 'litcoin', name: 'Litcoin', symbol: 'ltc' }
				]
			});
			//act
			const reponse = cryptoStore.getCryptoList();
			//assert
			expect(reponse).toStrictEqual([
				{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' },
				{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
				{ id: 'tether', name: 'Tether', symbol: 'usdt' },
				{ id: 'litcoin', name: 'Litcoin', symbol: 'ltc' }
			]);
		});

		test('Should emitChange, not error defined', () => {
			//arrange
			dispatcher.dispatch({
				type: actionType.ERROR_LOADING_DATA
			});
			//assert
			expect(cryptoStore.getErrorLoading()).toBe('ERROR LOADING');
		});

		test('Should return array with new favorite crypto', () => {
			//arrange
			dispatcher.dispatch({
				type: actionType.ADD_TO_FAVORITE_LIST,
				payload: { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' }
			});
			//act
			const response = cryptoStore.getFavoriteCurrencies();
			//assert
			expect(response).toEqual([
				{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' }
			]);
		});

		test('Should remove an items from the favorite array by there ID', () => {
			//arrange
			const favorites = [
				{ id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' },
				{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
				{ id: 'tether', name: 'Tether', symbol: 'usdt' },
				{ id: 'litcoin', name: 'Litcoin', symbol: 'ltc' }
			];
			//act
			favorites.forEach((currency) => cryptoStore.addToFavorite(currency));
			dispatcher.dispatch({
				type: actionType.REMOVE_FROM_FAVORITE_LIST,
				payload: 'bitcoin'
			});
			//assert
			expect(cryptoStore.getFavoriteCurrencies()).toStrictEqual([
				{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' },
				{ id: 'tether', name: 'Tether', symbol: 'usdt' },
				{ id: 'litcoin', name: 'Litcoin', symbol: 'ltc' }
			]);
		});

		test('Should break, default switch case', () => {
			dispatcher.dispatch({
				type: actionType.NOT_DEFINED
			});
			expect(true).toBe(true);
		});
	});
});
