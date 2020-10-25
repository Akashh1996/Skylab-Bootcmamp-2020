let _singer;
let _singersTracks = [];
let _singerIDs = [
    '4iHNK0tOyZPYnBU7nGAgpQ',
    '26dSoYclwsYLMAKD3tpOr4',
    '6tbjWDEIzxoDsBA1FuhfPW',
    '4dpARuHxo51G3z768sgnrY',
    '6vWDO969PvNqNYHIOW5v0m',
    '5pKCCKE2ajJHZ9KAiaK11H',
    '1Xyo4u8uXC1ZmMpatF05PJ',
    '06HL4z0CvFAxyc27GXpf02',
    '07YZf4WDAMNwqr4jfgOZ8y',
    '1HY2Jd0NmPuamShAr6KMms'
]

class Store {
    async loadSingerTracksFromAPI(token, singerID) {
        let response = await fetch(`https://api.spotify.com/v1/artists/${singerID}/top-tracks?access_token=${token}&offset=20&limit=10&market=US`);
        let data = await response.json();
        _singersTracks.push(data);
    }

    async loadSingerFromAPI(token, singerID) {
        let response = await fetch(`https://api.spotify.com/v1/artists/${singerID}?access_token=${token}`);
        _singer = await response.json();
    }

    getSingerID(num) {
        return _singerIDs[num];
    }

    getSinger() {
        return _singer;
    }

    getSingersTracks() {
        return _singersTracks;
    }

    resetSingersTracks() {
        _singersTracks = [];
        return _singersTracks;
    }
}

module.exports = Store;