
let _artistID;
let _imagesArtist;
let _albumName;
let _artistName;
let _token;
let _firstTopTrack;
let _trackId;
let _firstRelatedArtist;
let _secondRelatedArtist;
let _thirdRelatedArtist;
let _firstRelatedTopTrack;
let _secondRelatedTopTrack;
let _thirdRelatedTopTrack;



// AUTH
const CLIENT_ID = "e4d3ca268f8b4ee297645af223bf7215";
const CLIENT_SECRET = "01b4e97f54d0478b9f01891848945cfb";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

class SpotiStore {

    getToken() {
        return _token;
    }

    getArtistName() {
        return _artistName;
    }

    getArtistID() {
        return _artistID;
    }

    getImagesArtist() {
        return _imagesArtist;
    }

    getAlbumName() {
        return _albumName;
    }

    getTopTrack() {
        return _firstTopTrack;
    }

    getTrackIdToPlay() {
        return _trackId;
    }

    getFirstRelatedArtist() {
        return _firstRelatedArtist;
    }

    getSecondRelatedArtist() {
        return _secondRelatedArtist;
    }

    getThirdRelatedArtist() {
        return _thirdRelatedArtist;
    }

    getTopTrackRelatedOne() {
        return _firstRelatedTopTrack;
    }

    getTopTrackRelatedTwo() {
        return _secondRelatedTopTrack
    }

    getTopTrackRelatedThree() {
        return _thirdRelatedTopTrack
    }

    getTopTracksArtist = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
            method: `GET`,
            headers: {'Authorization': `Bearer ${access_token}`}
        })
        .then(resp =>{ 
            return resp.json()
        })
        .then((data) => {
            _firstTopTrack = data.tracks[0].name    
            _trackId = data.tracks[2].id
            return data
        })
        .catch(err => {console.warn(err)})

    }

    getTopTracksFirstRelated = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
            method: `GET`,
            headers: {'Authorization': `Bearer ${access_token}`}
        })
        .then(resp =>{ 
            return resp.json()
        })
        .then((data) => {
            _firstRelatedTopTrack = data.tracks[0].name    
            return data
        })
        .catch(err => {console.warn(err)})
    }

    getTopTracksSecondRelated = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
            method: `GET`,
            headers: {'Authorization': `Bearer ${access_token}`}
        })
        .then(resp =>{ 
            return resp.json()
        })
        .then((data) => {
            _secondRelatedTopTrack = data.tracks[0].name    
            return data
        })
        .catch(err => {console.warn(err)})

    }

    getTopTracksThirdRelated = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
            method: `GET`,
            headers: {'Authorization': `Bearer ${access_token}`}
        })
        .then(resp =>{ 
            return resp.json()
        })
        .then((data) => {
            _thirdRelatedTopTrack = data.tracks[0].name    
            return data
        })
        .catch(err => {console.warn(err)})
    }

    getRelatedArtists = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
            method: `GET`,
            headers: {'Authorization': `Bearer ${access_token}`}
        })
        .then(resp =>{ 
            return resp.json()
        })
        .then((data) => {
            _firstRelatedArtist = data.artists[0].id; 
            _secondRelatedArtist = data.artists[1].id;
            _thirdRelatedArtist = data.artists[2].id;
            return data
        })
        .catch(err => {console.warn(err)})

    }

    getArtistById = async (access_token, id) => {
        return fetch(`https://api.spotify.com/v1/artists/${id}`, {
          method: `GET`,
          headers: {'Authorization': `Bearer ${access_token}`}

        })
        .then(resp => resp.json())
        .then((artist)=>{
            _artistName = artist.name
            _imagesArtist = artist.images      
            return artist      
        })
        .catch(err => {console.warn(err)})
    }

    getToken(){
        let data = new URLSearchParams();
        data.append("client_id", CLIENT_ID);
        data.append("client_secret", CLIENT_SECRET);
        data.append("grant_type", "client_credentials");      
        data.append("scope", "user-read-private");      
 
        return fetch(TOKEN_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: data
        })
        .then(resp => resp.json())
        .then(json => json.access_token)
        .then(access_token => _token = access_token)
        .catch( err => {console.log(err)});
    }
}

const spotiStore = new SpotiStore();