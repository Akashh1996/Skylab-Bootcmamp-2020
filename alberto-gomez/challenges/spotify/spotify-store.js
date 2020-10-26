'use strict';
const client_id = '7d1c3b8a77b84d70b53e31e7690486e3';
const _client_secret_id = '7eb4b33d7d8a4abeb4d47f7f1f846669';
let token;
let _playlist;
let _songsForQuiz;
let _artist;

class SpotifyStore {
	async getToken() {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(client_id + ':' + _client_secret_id)
			},
			body: 'grant_type=client_credentials'
		});

		const data = await response.json();
		return (token = data.access_token);
	}

	async getPlaylist() {
		const response = await fetch(
			'https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + token
				}
			}
		);
		const gotPlaylist = await response.json();
		return (_playlist = gotPlaylist);
	}

	async getArtist() {
		debugger;
		const response = await fetch(
			`https://api.spotify.com/v1/artists/5a2EaR3hamoenG9rDuVn8j`,
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer' + token
				}
			}
		);
		debugger;

		const gotArtist = await response.json();
		return (_artist = gotArtist);
	}

	getSongs(songItems) {
		let songsForQuiz = [];
		for (let song = 0; song < 10; song++) {
			let songIndex = Math.round(Math.random() * songItems.length);
			songsForQuiz.push(songItems[songIndex]);
			songItems.splice(songIndex, 1);
		}
		return (_songsForQuiz = songsForQuiz);
	}

	getSongsQuiz() {
		return _songsForQuiz;
	}

	getArtistInfo() {
		return _artist;
	}
}

const store = new SpotifyStore();
