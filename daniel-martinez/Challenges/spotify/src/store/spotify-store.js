const clientId = "41172bf845c04637b8fd1f2ec199a12c";
const clientSecret = "30ef8a95af0a44df9af0da2785429282";
let token;

class SpotifyStore {
    async getToken(){
        try {
            const response = await fetch ('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
                },
                body: 'grant_type=client_credentials'
            });
            const data = await response.json();
            return (token = data.access_token);
        } catch (error) {
            console.log('Invalid token');
        }
    }


    async getPlaylist (token, playlistId) {
        const limit = 10;
        const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`,{
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        const data = await result.json();
        return data;
    }

    /*
    async getGenres(token){
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_ES`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer' + token}
    });
    const data = await result.json();
    return data_access_token;
    
    async getTracks(token, tracksEndPoint){
        const limit = 10;
         const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        const data = await response.json();
        return data.items;
    }

    async getTrack(token, trackEndPoint){

         const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        const data = await response.json();
        return data;
    } */
}

let spotifyStore = new SpotifyStore();

(async ()=>{
    await spotifyStore.getToken();
    console.log(token);
})()

module.exports(spotifyStore);