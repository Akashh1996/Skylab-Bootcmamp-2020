import actionTypes from './action-types';
import dispatcher from '../dispatcher/dispatcher';
import tokenStore from '../stores/token-store';
import artists from '../stores/artists';

const _clientId = '1f98b2a49efb4369b3cfdabe00ab9753';
const _clientIdSecret = '546ed94bc2ff43c182cf9102a0299a2f';

function getRandomArtistIdExcluding(artistId) {
	const idValues = Object.values(artists).filter((idValue) => {
		return idValue !== artistId;
	});
	return idValues[Math.floor(Math.random() * idValues.length)];
}

export async function requestSpotifyToken() {
	try {
		console.log('Token request');
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(`${_clientId}:${_clientIdSecret}`)
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
		console.log('Artist request');
		const url = `https://api.spotify.com/v1/artists/${artist}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenStore.getToken()}`
			}
		});
		const artistObject = await response.json();

		dispatcher.dispatch({
			type: actionTypes.REQUEST_ARTIST,
			payload: artistObject
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.ARTIST_ERROR
		});
	}
}

export async function requestOtherArtists(artistIdExcluded) {
	try {
		console.log('Other artists request');
		const otherArtists = [];
		for (let index = 0; index < 3; index++) {
			let artistId = getRandomArtistIdExcluding(artistIdExcluded);
			const url = `https://api.spotify.com/v1/artists/${artistId}`;
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenStore.getToken()}`
				}
			});
			const artistObject = await response.json();
			otherArtists.push(artistObject);
		}

		dispatcher.dispatch({
			type: actionTypes.REQUEST_OTHER_ARTISTS,
			payload: otherArtists
		});
	} catch (error) {}
}

export async function requestArtistTopTracks(artist) {
	try {
		console.log('Artist top track request');
		let url = `https://api.spotify.com/v1/artists/${artist}/top-tracks?country=ES`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenStore.getToken()}`
			}
		});
		const artistTracksJson = await response.json();
		const randomSongNumber = Math.floor(
			Math.random() * artistTracksJson.tracks.length
		);
		const randomSong = artistTracksJson.tracks[randomSongNumber];

		dispatcher.dispatch({
			type: actionTypes.REQUEST_TOP_ARTIST_TRACKS,
			payload: randomSong
		});
	} catch (error) {
		dispatcher.dispatch({
			type: actionTypes.ARTISTS_ERROR
		});
	}
}

export async function requestOtherArtistsTopTracks(artists) {
	try {
		console.log('Other artists top track request');
		const artistSongs = [];
		for (let index = 0; index < 3; index++) {
			let url = `https://api.spotify.com/v1/artists/${artists[index].id}/top-tracks?country=ES`;
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${tokenStore.getToken()}`
				}
			});
			const artistTracksJson = await response.json();
			const randomSongNumber = Math.floor(
				Math.random() * artistTracksJson.tracks.length
			);
			const randomSong = artistTracksJson.tracks[randomSongNumber];
			artistSongs.push(randomSong);
		}

		dispatcher.dispatch({
			type: actionTypes.REQUEST_OTHER_ARTISTS_TOP_ARTIST_TRACKS,
			payload: artistSongs
		});
	} catch (error) {}
}

export function reset() {
	console.log('Reset');
	dispatcher.dispatch({
		type: actionTypes.RESET_GAME
	});
}

export function sumScore() {
	console.log('Sum score');
	dispatcher.dispatch({
		type: actionTypes.SUM_SCORE
	});
}

export function sumFails() {
	console.log('Sum fails');
	dispatcher.dispatch({
		type: actionTypes.SUM_FAILS
	});
}
