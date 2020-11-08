import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';

const artists = {
	Rammstein: '6wWVKhxIU2cEi0K81v7HvP',
	Metallica: '2ye2Wgw4gimLv2eAKyk1NB',
	Dover: '5kdLOinhQnlSk4su7U6lyW',
	Linkin_Park: '6XyY86QOPPrYVGvF9ch6wz',
	Evanescence: '5nGIFgo0shDenQYSE0Sn7c',
	Green_Day: '7oPftvlwr6VrsViSDV7fJY',
	Nickelback: '6deZN1bslXzeGvOLaLMOIF',
	Simple_Plan: '2p4FqHnazRucYQHyDCdBrJ',
	The_Offspring: '5LfGQac0EIXyAN8aUwmNAQ',
	Within_Temptation: '3hE8S8ohRErocpkY7uJW4a',
	Sum_41: '0qT79UgT5tY4yudH9VfsdT'
};
const CHANGE = 'CHANGE';
let _spotifyToken;
let _artist;
let _artistTopTracks;
let _randomImageURL;

class Store extends EventEmitter {
	getToken() {
		return _spotifyToken;
	}

	setArtist(artist) {
		_artist = artist;
	}

	getArtist() {
		return _artist;
	}

	getRandomArtistId() {
		const idValues = Object.values(artists);
		return idValues[Math.floor(Math.random() * idValues.length)];
	}

	getArtistTopTracks() {
		return _artistTopTracks;
	}

	getRandomImage() {
		_randomImageURL = _artist?.images.find((element) => element.height >= 160)
			?.url;
		return _randomImageURL ? _randomImageURL : null;
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

const store = new Store();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_TOKEN:
			_spotifyToken = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_ARTIST:
			_artist = action.payload;
			store.emitChange();
			break;
		default:
			break;
	}
});

export default store;
