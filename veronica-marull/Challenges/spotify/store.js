const cliend_id = '45b4b614db144f139a1c1bae38f1df08';
const _cliend_secret_id = 'ffa91bded71f4c48a11aaebfd8719d69';
let token;

class SpotifyStore {
	async getToken() {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(cliend_id + ':' + _cliend_secret_id)
			},
			body: 'grant_type=client_credentials'
		});
		const data = await response.json();

		return (token = data.access_token);
	}

	async getNewReleases() {
		await this.getToken();
		const response = await fetch(
			'https://api.spotify.com/v1/browse/new-releases?offset=0&limit=10',
			{
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		return await response.json();
	}
	/*
	async getInfoArtist(artistId) {
		await this.getToken();
		const artistInfo = await fetch(
			`https://api.spotify.com/v1/artists/${artistId}`,
			{
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		return await artistInfo.json();
	}

	async getAlbumsById(albumId) {
		await this.getToken();
		const albumsName = await fetch(
			`https://api.spotify.com/v1/albums/${albumId}`,
			{
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		return await albumsName.json();
	}*/
}

const spotiStore = new SpotifyStore();

module.exports = spotiStore;
