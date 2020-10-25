let _spotifyData;
const cliend_id = '522f6a81070e477d87135a0c669e9bd5';
const _cliend_secret_id = 'cb68d9cfbc9d489eb30fd35a21e7a005';
let _token ='BQDiIA2_nPXOnFTG09LnX5VWBjR8KCE-rYQk5IlsGISe-ZdONOc-BuwUi51E4tRdrxhloYvXptRSJ69A19bwdZe9kVwpar81PP-uwRT5ndj2pHdB0sNbY02VDJ9SiuHv-4Fu20SOF__-sAB1COmyM7QWFfUj4lAFvHIpqu4'
let itemArray = [];
let artistArray = [];

class Store {

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
		return (_token = data.access_token);
	}

    async getSpotifyData() {
        let url = 'https://api.spotify.com/v1/playlists/3RMpYJp5SZZfzQiRI5vfzB'
        const response = await fetch(url, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + _token }
        });
        const spotifyData = await response.json();
		_spotifyData = spotifyData;
		return itemArray = _spotifyData.tracks.items;
	}
	
}      

const store = new Store();

module.exports = store;