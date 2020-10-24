let _singers;

class Store {
    async loadSingersFromAPI(token) {
        let response = await fetch(`https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ/top-tracks?access_token=${token}&offset=20&limit=10&market=US`);
        _singers = await response.json();
    }

    getSingers() {
        return _singers;
    }
}