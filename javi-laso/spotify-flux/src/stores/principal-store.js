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
const _clientId = '05dc5f8122b14c52afb72bb104b0cd15';
const _clientIdSecret = 'cac1ad72eabb4308aeb18bb6e963405f';
let _spotifyToken;
let _artist;
let _artistTopTracks;

class Store extends EventEmitter {
	getClientId() {
		return _clientId;
	}

	getClientSecret() {
		return _clientIdSecret;
	}

	getToken() {
		return _spotifyToken;
	}

	setArtist(artist) {
		_artist = artist;
	}

	getArtist() {
		return _artist;
	}

	getArtistTopTracks() {
		return _artistTopTracks;
	}
}

const store = new Store();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_TOKEN:
			break;

		default:
			break;
	}
});

export default store;
