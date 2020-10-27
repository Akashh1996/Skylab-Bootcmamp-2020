const cliend_id = '93063f49f7f3443dbe9e8373b3995be8';
const _cliend_secret_id = '1ad5f61d14f54e0390bf55737f267899';
const userId = 	114795487;
let token;
let playList;
let chosenArtist = [];
let chosenAnswers = [];
let chosenAnswersImg = [];
class SpotifyStore {
	async getToken () {
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
    
    async addPlayList(){
        const response = await fetch('https://api.spotify.com/v1/playlists/0qx7Ojyqny82OalCb1tCOv', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token
            },
        })
        const data = await response.json();
        return (playList = data.tracks.items);
    }

    selectArtistAndSong (){
        var selector = Math.floor(Math.random()*playList.length);
        chosenArtist[0] = (playList[selector].track.artists[0].name);
        chosenArtist[1] = (playList[selector].track.name);
        chosenArtist[2] = (playList[selector].track.preview_url);
        chosenArtist[3] = (playList[selector].track.album.images[1].url);
        return chosenArtist;
    }
    selectAnswers(){
        var selector;
        for(let i = 0; i < 3; i++){
            selector = Math.floor(Math.random()*playList.length);
            while(playList[selector].track.artists[0].name === chosenArtist[0] || playList[selector].track.artists[0].name === chosenAnswers[0] || playList[selector].track.artists[0].name === chosenAnswers[1] || playList[selector].track.artists[0].name === chosenAnswers[2]){
                selector = Math.floor(Math.random()*playList.length);
            }
            chosenAnswers[i] = playList[selector].track.artists[0].name;
            chosenAnswersImg[i] = playList[selector].track.album.images[1].url;
        }
        chosenAnswers.push(chosenArtist[0]);
        return chosenAnswers;
        
    }
    getAnswersImg(){
        chosenAnswersImg.push(chosenArtist[3]);
        return chosenAnswersImg;
    }
    
}

const spotifystore = new SpotifyStore();