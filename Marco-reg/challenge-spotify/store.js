let _songs;
const cliend_id = 'bd87b7392f22490abb0b38a155d9f304';
const _cliend_secret_id = '993cbe46a8aa47b4a9bf0ce7ea5c5087';
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
    async playlist() {
        const url = "https://api.spotify.com/v1/playlists/6MrdHh0YA45IQQEflS39TX"
        try {
            const response = await fetch (url, {
                method: "GET",
                headers: { Authorization: "Bearer " + token }
            })
            const playlistObject = await response.json();
            _songs = playlistObject;
        } catch (error) {
            _songs = null;
        }
    }
}
const spotify = new SpotifyStore();
(async() => {
    await spotify.getToken();
    await spotify.playlist();
    
    console.log(_songs);
    let songlist=_songs.tracks.items;

    let songsArray=[];
    for(i in songlist){
        console.log(songlist[i].track.name);
        songsArray.push(songlist[i].track.name)
    }
})();
module.exports = spotify;