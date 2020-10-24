const cliend_id = '856170a8252b42118e031134ded4900e';
const _cliend_secret_id = '3654b3089dc14cca8c5a7efd86b2fab5';
let _token;
let _artist;


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

    async getArtist(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + _token
            }
        })
        const data = await response.json();
        return _artist = data;
    }
}

const trivialify = new SpotifyStore();

(async () => {
    await trivialify.getToken()
    await trivialify.getArtist('https://api.spotify.com/v1/artists/5IH6FPUwQTxPSXurCrcIov');
    console.log(_artist);
})()


module.exports = spotiStore;