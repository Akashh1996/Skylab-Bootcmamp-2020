const client_id = '7d1c3b8a77b84d70b53e31e7690486e3';
const _client_secret_id = '7eb4b33d7d8a4abeb4d47f7f1f846669';
let token;
let _playlist;

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
			'https://api.spotify.com/v1/playlists/37i9dQZF1DWTvNyxOwkztu',
			{
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + token
				}
			}
		);
		const gotPlaylist = await response.json();
		_playlist = gotPlaylist;
	}
}

const store = new SpotifyStore();

(async () => {
	await store.getToken();
	await store.getPlaylist();

	console.log(token);
	console.log(_playlist);
})();
