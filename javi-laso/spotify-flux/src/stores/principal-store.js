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

class Store extends EventEmitter {
	constructor() {
		super();
		this.spotifyToken = null;
		this.artist = null;
		this.artistTopTracks = null;
		this.imageURL = null;
		this.otherArtists = null;
		this.otherArtistsTopTracks = null;
		this.score = 0;
		this.fails = 0;
	}
	getToken() {
		return this.spotifyToken;
	}

	getArtist() {
		return this.artist;
	}

	getRandomArtistId() {
		const idValues = Object.values(artists);
		return idValues[Math.floor(Math.random() * idValues.length)];
	}

	getRandomArtistIdExcluding(artistId) {
		const idValues = Object.values(artists).filter((idValue) => {
			return idValue !== artistId;
		});
		return idValues[Math.floor(Math.random() * idValues.length)];
	}

	getArtistTopTrack() {
		return this.artistTopTracks;
	}

	getImage() {
		this.imageURL = this.artist?.images.find(
			(element) => element.height >= 160
		)?.url;
		return this.imageURL ? this.imageURL : null;
	}

	getOtherArtists() {
		return this.otherArtists;
	}

	getOtherArtistsTopTracks() {
		return this.otherArtistsTopTracks;
	}

	getScore() {
		return this.score;
	}

	getFails() {
		return this.fails;
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
			debugger;
			store.spotifyToken = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_ARTIST:
			debugger;
			store.artist = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_OTHER_ARTISTS:
			debugger;
			store.otherArtists = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_TOP_ARTIST_TRACKS:
			debugger;
			store.artistTopTracks = action.payload;
			store.emitChange();
			break;
		case actionTypes.REQUEST_OTHER_ARTISTS_TOP_ARTIST_TRACKS:
			debugger;
			store.otherArtistsTopTracks = action.payload;
			store.emitChange();
			break;
		case actionTypes.RESET_GAME:
			debugger;
			store.artist = null;
			debugger;
			store.otherArtists = null;
			debugger;
			store.artistTopTracks = null;
			debugger;
			store.otherArtistsTopTracks = null;
			store.emitChange();
			break;
		case actionTypes.SUM_SCORE:
			debugger;
			store.score++;
			store.emitChange();
			break;
		case actionTypes.SUM_FAILS:
			debugger;
			store.fails++;
			store.emitChange();
			break;
		default:
			break;
	}
});

export default store;
