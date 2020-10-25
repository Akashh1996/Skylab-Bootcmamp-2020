const cliend_id = '8d42c4111c7d4ea2ba8f830f26de85f8';
const _cliend_secret_id = '49814f1637ae4e6b89605bab9571cc0b';
let token;


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
            
        } catch (error) {
            alert('Token Invalido');
            
        }
    }

    async getPlayLists()     {
		const response = await fetch(
            'https://api.spotify.com/v1/playlists/37i9dQZF1DXb69UWhjrXsW', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        let playListsResult = await response.json();
		return playListsResult;
    }

    

}

const store = new SpotifyStore();



module.exports = store;



