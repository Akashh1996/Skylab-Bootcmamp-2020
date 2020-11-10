import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const CHANGE = 'CHANGE';

const currentServerData = {
	cryptoCurrenciesList: null,
	favoriteCurrenciesList: [],
	error: ''
};

class CryptoStore extends EventEmitter {
	setDefaulSettings() {
		currentServerData.cryptoCurrenciesList = null;
		currentServerData.favoriteCurrenciesList = [];
		currentServerData.error = '';
	}

	getErrorLoading() {
		return currentServerData.error
	}

	getCryptoList() {
		return currentServerData.cryptoCurrenciesList;
	}

	getFavoriteCurrencies() {
		return currentServerData.favoriteCurrenciesList;
	}

	addToFavorite(currency) {
		currentServerData.favoriteCurrenciesList.push(currency);
	}

	removeFromFavorite(currency) {
		const deleteCurrency = currentServerData.favoriteCurrenciesList.filter(
			(cryptoCurrency) => cryptoCurrency.id !== currency
		);
		return deleteCurrency;
	}

	addEventListener(callback) {
		this.on(CHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(CHANGE, callback);
	}

	emitChange() {
		this.emit(CHANGE);
	}
}

const cryptoStore = new CryptoStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_COINS_LIST:
			currentServerData.cryptoCurrenciesList = action.payload;
			cryptoStore.emitChange();
			break;
		case actionTypes.ERROR_LOADING_DATA:
			currentServerData.error = 'ERROR LOADING'
			cryptoStore.emitChange();
			break;
		case actionTypes.ADD_TO_FAVORITE_LIST:
			cryptoStore.addToFavorite(action.payload);
			cryptoStore.emitChange();
			break;
		case actionTypes.REMOVE_FROM_FAVORITE_LIST:
			currentServerData.favoriteCurrenciesList = cryptoStore.removeFromFavorite(
				action.payload
			);
			cryptoStore.emitChange();
			break;
		default:
			break;
	}
});

export default cryptoStore;
