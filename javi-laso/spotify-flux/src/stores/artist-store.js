import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { ARTISTSTORECHANGE } from './constants';
import artists from './artists';

class ArtistStore extends EventEmitter {
	constructor() {
		super();
		this.artist = null;
		this.otherArtists = null;
		this.imageURL = null;
	}

	getArtist() {
		return this.artist;
	}

	getOtherArtists() {
		return this.otherArtists;
	}

	getRandomArtistId() {
		const idValues = Object.values(artists);
		return idValues[Math.floor(Math.random() * idValues.length)];
	}

	getImage() {
		this.imageURL = this.artist?.images.find(
			(element) => element.height >= 160
		)?.url;
		return this.imageURL ? this.imageURL : null;
	}

	addEventListener(callback) {
		this.on(ARTISTSTORECHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(ARTISTSTORECHANGE, callback);
	}

	emitChange() {
		this.emit(ARTISTSTORECHANGE);
	}
}

const artistStore = new ArtistStore();

artistStore.dispatchToken = dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_ARTIST:
			artistStore.artist = action.payload;
			artistStore.emitChange();
			break;
		case actionTypes.REQUEST_OTHER_ARTISTS:
			artistStore.otherArtists = action.payload;
			artistStore.emitChange();
			break;
		case actionTypes.RESET_GAME:
			artistStore.artist = null;
			artistStore.otherArtists = null;
			artistStore.emitChange();
			break;
		default:
			break;
	}
});

export default artistStore;
