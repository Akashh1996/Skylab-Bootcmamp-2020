let _hans;
let token;
const cliend_id = '6dc64ac2d3f84d2cab497f3dba195f86';
const _cliend_secret_id = '32202c2adbf843f5bb110005a3fe725f';

class Store {

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
            console.log('Invalid token')
        }
    }

    async loadPlaylist () {
        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZF1DWWF3yivn1m3D/tracks?access_token=${token}`)
            const hans = await response.json()
            return _hans = hans
        } catch(error) {
            console.log('error')
        }
    }

}

const store = new Store();

module.exports = store;