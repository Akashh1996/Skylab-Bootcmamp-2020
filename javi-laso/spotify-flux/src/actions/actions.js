import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';

export async function requestSpotifyToken() {
	try {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' + btoa(`${this.getClientId()}:${this.getClientSecret()}`)
			},
			body: 'grant_type=client_credentials'
		});
		const data = await response.json();

		dispatcher.dispatch({
			type: actionTypes.REQUEST_TOKEN,
			payload: data.access_token
		});
	} catch (tokenError) {
		dispatcher.dispatch({
			type: actionTypes.TOKEN_ERROR
		});
	}
}

export async function requestArtist(artist) {
	try {
		const url = `https://api.spotify.com/v1/artists/${artist}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.getToken()}`
			}
		});
		const artistObject = await response.json();

		dispatcher.dispatch({
			type: actionTypes.REQUEST_TOKEN,
			payload: artistObject
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.ARTIST_ERROR
		});
	}
}

export async function requestArtistTopTracks(artist) {
	try {
		const url = `https://api.spotify.com/v1/artists/${artist}/top-tracks?country=ES`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.getToken()}`
			}
		});
		const artistTracksJson = await response.json();

		dispatcher.dispatch({
			type: actionTypes.REQUEST_ARTISTS,
			payload: artistTracksJson['tracks']
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.ARTISTS_ERROR
		});
	}
}
