let spotifyToken;

class Spotify {
	async requestSpotifyToken() {
		const clientId = 'client_id=05dc5f8122b14c52afb72bb104b0cd15';
		const responseType = 'response_type=token';
		const redirectUri = 'redirect_uri=http://127.0.0.1:5500/';
		const url = `https://accounts.spotify.com/authorize?${clientId}&${responseType}&${redirectUri}`;
		const response = await fetch(url);
		const token = await response.json();
		spotifyToken = token;
		debugger;
		return token;
	}

	getToken() {
		return spotifyToken;
	}
}

const store = new Spotify();
