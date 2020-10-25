const cliend_id = '1ab978dbc11f4ec1a57242474134a007';
const _cliend_secret_id = 'fa2bc6e91e6c4c2b90420a2565b26669';
let token;
let artistsList;
let tracks;
let albums;
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
			`https://api.spotify.com/v1/artists?ids=7BqEidErPMNiUXCRE0dV2n,2xiIXseIJcq3nG7C8fHeBj,5eAWCfyUhZtHHtBdNk56l1,06VibSJEr3GLxLBBZhRums,3TOqt5oJwL9BE2NG9MEwDa,2CIMQHirSU0MQqyYHq0eOx,64KEffDW9EtZ1y2vBYgq8T,4YwB41gFHCxY5bcNR3CcIH,6aUgzC0cMh0StjV7LyFEDr`,
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
		const spotifyAlbums = await response.json();
		return (albums = spotifyAlbums);
	}
	async getTracks(artistId) {
		const response = await fetch(
			`https://api.spotify.com/v1/artists/${artistId}/top-tracks`,
			{
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			}
		);
		const spotifyTracks = await response.json();
		return (tracks = spotifyTracks);
	}
}

let spotifyStore = new SpotifyStore();

(async () => {
	console.log(await spotifyStore.getToken());
	console.log(await spotifyStore.getArtist());
	console.log(await spotifyStore.getAlbums('7BqEidErPMNiUXCRE0dV2n'));
	console.log(await spotifyStore.getTracks('7BqEidErPMNiUXCRE0dV2n'));
})();
