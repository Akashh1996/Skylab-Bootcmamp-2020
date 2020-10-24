let _spotifyData;
const cliend_id = '522f6a81070e477d87135a0c669e9bd5';
const _cliend_secret_id = 'cb68d9cfbc9d489eb30fd35a21e7a005';
let token = 'BQCm9zt6OlB0rWvJFmJzBwzeP6vb_zmoH3BrCFlNX6dn2Um1GUeEYBuE2ntNww8Cd14m6wbBXAd8QXe_HFhkf_IWAzcmlc5RftqiAI9BSzbglp-MSwL6UxZox-oxHv72UpRwUIXKagidR__hR4jwkOEo7n798YwBl7oiyHI'

class Store {

    async getSpotifyData() {
        let url = 'https://api.spotify.com/v1/playlists/3RMpYJp5SZZfzQiRI5vfzB'
        const response = await fetch(url, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token }
        });
        const spotifyData = await response.json();
        _spotifyData = spotifyData;
    }

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
}       

const store = new Store();