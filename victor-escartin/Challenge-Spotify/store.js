const cliend_id = '8d42c4111c7d4ea2ba8f830f26de85f8';
const _cliend_secret_id = '49814f1637ae4e6b89605bab9571cc0b';
let token;
let album;

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

    async getAlbum()     {
		const response = await fetch(
            'https://api.spotify.com/v1/albums/6hNSKuMHV6sGMXkGwhTSgL', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const albumResult = await response.json();
        console.log(albumResult);
		return albumResult;
    }
    
    async getArtist()     {
		const response = await fetch(
            'https://api.spotify.com/v1/artist/58lV9VcRSjABbAbfWS6skp', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const artistResult = await response.json();
        console.log(artistResult);
		return artistResult;
    }
    
    async getAlbumArtist()     {
		const response = await fetch(
            'https://api.spotify.com/v1/artist/58lV9VcRSjABbAbfWS6skp/albums', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const artistAlbResult = await response.json();
        console.log(artistAlbResult);
		return artistAlbResult;
    }

    async getTracks()     {
		const response = await fetch(
            'https://api.spotify.com/v1/albums/58lV9VcRSjABbAbfWS6skp/tracks/', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const artistTracksResult = await response.json();
        console.log(artistTracksResult);
		return artistTracksResult;
    }

}

const store = new SpotifyStore();

(async ()=>{
    await store.getToken();
    await store.getAlbum();
    await store.getArtist();
    await store.getTracks();
    console.log(token);

})()

module.exports = store;



