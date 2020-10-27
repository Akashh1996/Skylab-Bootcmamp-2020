let _songs;
const cliend_id = '4427b839639247e6b319327ff1867c47';
const _cliend_secret_id = '210a2d1182a6449bb35b3fe7a677fb9b';
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
    async playlist() {
        const url = "https://api.spotify.com/v1/playlists/67pjcF8OQNIPkBj0OzEfdd"
        try {
            const response = await fetch (url, {
                method: "GET",
                headers: { Authorization: "Bearer " + token }
            })
            const playlistObject = await response.json();
            _songs = playlistObject;
        } catch (error) {
            _songs = null;
        }
    } 
}
const spotify = new SpotifyStore();






// module.exports = spotify;

