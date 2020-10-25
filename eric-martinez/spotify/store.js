const cliend_id = '73ec55e8d34449b7983ebabfd68019c9';
const _cliend_secret_id = 'd462c699412d48bdb1a016b2a545e173';
let token;
let _playlist;

class SpotifyStore {
	async getToken() {
		try{
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
            console.log('Invalid token');
        }
    }

    async getPlaylist() {
        const response = await fetch(
            'https://api.spotify.com/v1/playlists/73YTQVXQrSTDHjy7e2My0G',
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const playlist = await response.json();
        _playlist = playlist;
        return _playlist;
    }
}

const store = new SpotifyStore();
