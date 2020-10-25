let _spotifyData;
const cliend_id = '522f6a81070e477d87135a0c669e9bd5';
const _cliend_secret_id = 'cb68d9cfbc9d489eb30fd35a21e7a005';
let token ='BQACRKipwIyaQxa5Nbfa0eMzooVKhE3oOk7vmWIJ1OCHK9F1bmYeqy87NUzSw6w_AZpceaa0y63s_LOWXOftQN332CVZWMn1tqz6C2PZNDH1mPz1Gmr4jOBbnXbMp44jlnRs3lucq3B37qA3MbU4ywFLkjx8H6hH2pAbbrs'
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

const store = new Store();