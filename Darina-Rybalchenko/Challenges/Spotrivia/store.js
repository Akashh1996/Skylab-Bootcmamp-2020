const cliend_id = '45e87dbfc6544be9a5552e198d98aec5';
const _cliend_secret_id = '303572df10dd4650ab69b01d0e65d6b5';
let token;
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

    async getArtist() {
        const response = await fetch('https://api.spotify.com/v1/artists?ids=6bWxFw65IEJzBYjx3SxUXd,4tZwfgrHOc3mvqYlEYSvVi,54QMjE4toDfiCryzYWCpXX,1GhPHrq36VKCY3ucVaZCfo,1yxSLGMDHlW21z4YXirZDS,1tqZaCwM57UFKjWoYwMLrw,6tbjWDEIzxoDsBA1FuhfPW ',
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const result = await response.json();
        return result
    }

    async getAlbum() {
        const response = await fetch('https://api.spotify.com/v1/albums/?ids=0LtBG81oAbMoKVwHts66MQ,',
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }

            });
        const result = await response.json()
        return result
    }

    async getPlaylist() {
        const response = await fetch('https://api.spotify.com/v1/playlists/6k9xRTn4aAyp1N5iOXJV5n',
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }

            });
        const result = await response.json()
        return result
    }


}
const store = new SpotifyStore();

(async () => {
    await store.getToken();
    console.log(token);
    console.log(store.getArtist())
    console.log(store.getAlbum())
    console.log(store.getPlaylist())
})();
