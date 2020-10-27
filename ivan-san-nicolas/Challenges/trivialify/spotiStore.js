const cliend_id = '856170a8252b42118e031134ded4900e';
const _cliend_secret_id = '3654b3089dc14cca8c5a7efd86b2fab5';
let _token;
let _artist;
let _topTracks = [];


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
            _token = data.access_token;
            return _token;
        } catch {
            alert(`Error: It was not possible to get Spotify API token. Please, wait and try again later.`);
        }
    }

    async getArtist(id) {
        const url = `https://api.spotify.com/v1/artists/${id}`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + _token
                }
            })
            const data = await response.json();
            _artist = data;
            return _artist;
        } catch {
            alert(`Error: It was not possible to get the Artist: ${id}`);
            console.log('Artist id error:');
            console.log(id);
        }
    }

    async getTopTracks(id) {
        const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + _token
                }
            })
            const data = await response.json();
            _topTracks = data;
            return _topTracks;
        } catch {
            alert(`Error: It was not possible to get the Artist top Tracks. Artist id: ${id}`);
            console.log('Artist id error:');
            console.log(id);
        }
    }
}

const trivialify = new SpotifyStore();


module.exports = spotiStore;