let _spotifyData;
const cliend_id = '522f6a81070e477d87135a0c669e9bd5';
const _cliend_secret_id = 'cb68d9cfbc9d489eb30fd35a21e7a005';
let token ='BQCmRy2hJmlgdv2SaPzF0cxTobeWlQCfsMW0ZNj9_RHSdFja9OjfZVkr-LpN5yoYJUgb6f5rTYi-B-9ALBFUgsAPoIMBvhiCqN1XHVw9oOMkn4AUMsELBoaSwHCdoOvD8lCWiIrxLF6llc6LwR873cTKZrE3ktbQ86PbQKY'
let itemArray = [];
let artistArray = [];
let prueba;

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
		return (token = data.access_token);
	}

    async getSpotifyData() {
        let url = 'https://api.spotify.com/v1/playlists/3RMpYJp5SZZfzQiRI5vfzB'
        const response = await fetch(url, {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token }
        });
        const spotifyData = await response.json();
		_spotifyData = spotifyData;
		itemArray = _spotifyData.tracks.items;
    }
	
}      



// getArtistName _spotifyData.tracks.items[0].track.artists[0].name

//getSongName _spotifyData.tracks.items[0].track.name

const store = new Store();