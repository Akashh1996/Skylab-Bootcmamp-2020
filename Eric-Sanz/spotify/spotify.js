const client_id = '724b0a4be9a74098bb8516834b5ff225';
const client_secret_id = 'f4bdfb5f691c4c0fbd0b9c7b88526d03';
let token;

class SpotifyStore {
	async getToken() {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa(client_id + ':' + client_secret_id)
			},
			body: 'grant_type=client_credentials'
		});
        const data = await response.json();
        return (token = data.access_token);
    }

    async getTracks() {
        const response = await fetch(
            'https://api.spotify.com/v1/albums/6BGQNnV4uMJkKp6RHySVN1/tracks/', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const albumTracks = await response.json();
        console.log(albumTracks);
        return albumTracks;
    }

    async getAlbum()     {
        const response = await fetch(
            'https://api.spotify.com/v1/albums/6BGQNnV4uMJkKp6RHySVN1', 
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const result = await response.json();
        console.log(result);
        return result;
    }

    async getPlaylist() {
        const response = await fetch(
            `https://api.spotify.com/v1/users/luffydenq/playlists/4Ig0JbRUTskb2vojdNMQHJ/tracks`,
            {
                method: 'GET',
                headers: { Authorization: 'Bearer ' + token }
            }
        );
        const playlist = await response.json();
        console.log(playlist);
        console.log(playlist.items[1].track.name);
        console.log(playlist.items[1].track.artists[0].name);
        return playlist;
    }
}


// /?ids= para mas de una id a la vez





const spotifystore = new SpotifyStore();
