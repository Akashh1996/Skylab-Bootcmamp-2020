const cliend_id = 'ee0dc57d5f1849aa8d1f16a59f079c4f';
const _cliend_secret_id = '82a4a00f29cf40fa85ad2e7e8da34750';
let token;
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