const cliend_id = '1ab978dbc11f4ec1a57242474134a007';
const _cliend_secret_id = 'fa2bc6e91e6c4c2b90420a2565b26669';
let token;
let artistsList;
class SpotifyStore {
	async getToken() {
		try {
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
		} catch (tokenError) {
			console.log('Token invalido');
		}
	}

	async getArtist() {
		const response = await fetch(
			`https://api.spotify.com/v1/artists?ids=78tfBR026VhVUGCBiZMX06,7i3eGEz3HNFnPOCdc7mqoq,7muzHifhMdnfN1xncRLOqk,0DCw6lHkzh9t7f8Hb4Z0Sx,6qqNVTkY8uBg9cP3Jd7DAH,24Hb4GKFYquK73R8mTyInu,7fM0h2CG7zKqKc0jEa1b4R,5lCekoJW9jNq01B1wiqdAb,6aUgzC0cMh0StjV7LyFEDr`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const artists = await response.json();
		return (artistsList = artists.artists);
	}
	async getAlbums(artistId) {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${artistId}/albums`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const result = await response.json();
		return result;
	}
}

let spotifyStore = new SpotifyStore();

(async () => {
	await spotifyStore.getToken();
})();
