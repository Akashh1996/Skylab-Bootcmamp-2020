const cliend_id = '856170a8252b42118e031134ded4900e';
const _cliend_secret_id = '3654b3089dc14cca8c5a7efd86b2fab5';
let _token;
let _artist;
let _topTracks = [];


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
        _token = data.access_token;
        return _token;
    }

    async getArtist(id) {
        const url = `https://api.spotify.com/v1/artists/${id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + _token
            }
        })
        const data = await response.json();
        _artist = data;
        return _artist;
    }

    async getTopTracks(id) {
        const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + _token
            }
        })
        const data = await response.json();
        _topTracks = data;
        return _topTracks;
    }
}

const trivialify = new SpotifyStore();


module.exports = spotiStore;