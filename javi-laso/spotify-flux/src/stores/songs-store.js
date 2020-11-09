import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../actions/action-types';
import { SONGSSTORECHANGE } from './constants';
import artistStore from './artist-store';

class SongsStore extends EventEmitter {
	constructor() {
		super();
		this.artistTopTracks = null;
		this.otherArtistsTopTracks = null;
	}

	getArtistTopTrack() {
		return this.artistTopTracks;
	}

	getOtherArtistsTopTracks() {
		return this.otherArtistsTopTracks;
	}

	addEventListener(callback) {
		this.on(SONGSSTORECHANGE, callback);
	}

	removeEventListener(callback) {
		this.removeListener(SONGSSTORECHANGE, callback);
	}

	emitChange() {
		debugger;
		this.emit(SONGSSTORECHANGE);
	}
}

const songsStore = new SongsStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.REQUEST_TOP_ARTIST_TRACKS:
			songsStore.artistTopTracks = action.payload;
			songsStore.emitChange();
			break;
		case actionTypes.REQUEST_OTHER_ARTISTS_TOP_ARTIST_TRACKS:
			songsStore.otherArtistsTopTracks = action.payload;
			songsStore.emitChange();
			break;
		case actionTypes.RESET_GAME:
			debugger;
			artistStore.artistTopTracks = null;
			artistStore.otherArtistsTopTracks = null;
			songsStore.emitChange();
			break;
		default:
			break;
	}
});

export default songsStore;
