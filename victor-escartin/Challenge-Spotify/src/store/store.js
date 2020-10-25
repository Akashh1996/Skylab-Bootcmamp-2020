const cliend_id = '8d42c4111c7d4ea2ba8f830f26de85f8';
const _cliend_secret_id = '49814f1637ae4e6b89605bab9571cc0b';
let token;

let _singer;
let _singersTracks = [];
let _singerIDs = [
    '31TPClRtHm23RisEBtV3X7',  //Justin Timberlake
    '0du5cEVh5yTK9QJze8zA0C',  //Bruno Mars
    '6eUKZXaKkcviH0Ku9w2n3V',  //Ed Sheeran
    '1HY2Jd0NmPuamShAr6KMms',  //Lady Gaga
    '58lV9VcRSjABbAbfWS6skp',  //Bon Jovi
    '711MCceyCBcFnzjGY4Q7Un',  //AC/CD
    '7Ey4PD4MYsKc5I2dolUwbH',  //Aerosmith
    '06HL4z0CvFAxyc27GXpf02',
    '07YZf4WDAMNwqr4jfgOZ8y',
    '1HY2Jd0NmPuamShAr6KMms'
]

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

const store = new SpotifyStore();

module.exports = store;
