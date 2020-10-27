const cliend_id = '45e87dbfc6544be9a5552e198d98aec5';
const _cliend_secret_id = '303572df10dd4650ab69b01d0e65d6b5';
let token;
let playList = []

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


    async loadPlaylist() {
        const response = await fetch('https://api.spotify.com/v1/playlists/6k9xRTn4aAyp1N5iOXJV5n',
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }

            });
        const result = await response.json()
        return playList = result.tracks.items

    }
}
const store = new SpotifyStore();

module.exports = store

