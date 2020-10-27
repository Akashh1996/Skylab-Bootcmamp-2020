const cliend_id = '18124cc89b004207b285f877b4d3e3cc';
const cliend_secret_id = 'c655bac01d2446a8bf6d14971a0e3f90';
let token;

class SpotifyStore {
	async getToken() {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(cliend_id + ':' + cliend_secret_id)
			},
			body: 'grant_type=client_credentials'
		});
		const data = await response.json();
		return (token = data.access_token);
	}

	async getArtist(idArtist) {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${idArtist}`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const result = await response.json();
		return result;
	}

	async getTopSongs(idArtist) {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${idArtist}/top-tracks?country=ES`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const result = await response.json();
		return result;
	}

	async getAlbums(idArtist) {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${idArtist}/albums`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const result = await response.json();
		return result;
	}

	async getAlbumsRandom() {
		const response = await fetch('https://api.spotify.com/v1/albums', {
			method: 'GET',
			headers: { Authorization: 'Bearer ' + token }
		});
		const result = await response.json();
		return result;
	}
}

const spotifyStore = new SpotifyStore();

module.exports = spotifyStore;
