let _songs;
const cliend_id = 'bd87b7392f22490abb0b38a155d9f304';
const _cliend_secret_id = '993cbe46a8aa47b4a9bf0ce7ea5c5087';
let token;

let artistsArray = [];
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
		const url = 'https://api.spotify.com/v1/playlists/37i9dQZF1E39jv72r40LVS';
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: { Authorization: 'Bearer ' + token }
			});
			const playlistObject = await response.json();
			_songs = playlistObject;
		} catch (error) {
			_songs = null;
		}
	}
}
const spotify = new SpotifyStore();
(async () => {
	await spotify.getToken();
	await spotify.playlist();

	let songsList = _songs.tracks.items;
	let imageArray = [];

	console.log(_songs);
	let songlist = _songs.tracks.items;

	let songsArray = [];
	for (i in songsList) {
		imageArray.push(songsList[i].track.album.images[1]);
	}
	for (i in songsList) {
		artistsArray.push(songsList[i].track.artists[0].name);
	}

	for (i in songlist) {
		console.log(songlist[i].track.name);
		songsArray.push(songlist[i].track.name);
	}
	function generateRandomIndex() {
		let randomIndex = Math.floor(Math.random() * songsArray.length);
		return randomIndex;
	}
	randomIndex = generateRandomIndex();
	console.log(randomIndex);
	function displayRandomValues() {
		console.log(songsList[randomIndex].track.artists[0].name);
		document.getElementById('artist-1').innerHTML =
			songsList[randomIndex].track.artists[0].name;
		document.getElementById('artist-2').innerHTML =
			songsList[randomIndex].track.artists[0].name;
		document.getElementById('artist-3').innerHTML =
			songsList[randomIndex].track.artists[0].name;
		document.getElementById('song-image').src = imageArray[randomIndex].url;
		
	}
	displayRandomValues();
	function displayRandomAnswers() {
		let arrayAnswers = [];
		let randomAnswersIndex = Math.floor(Math.random() * artistsArray.length);
		for (let i = 0; i < 3; i++) {
			let randomAnswerIndex = generateRandomIndex();
			arrayAnswers.push(songlist[randomAnswerIndex].track.name);
		}
		arrayAnswers.push(songlist[randomIndex].track.name);
		arrayAnswers.sort(() => Math.random() - 0.5);
		console.log(arrayAnswers);
		for (let i = 0; i < 4; i++) {
			document.getElementById(`button${i + 1}`).innerHTML = arrayAnswers[i];
		}
	}
	displayRandomAnswers();
	
	document.getElementById('audio-test').src =
		songlist[randomIndex].track.preview_url;
})();

document
	.getElementsByClassName('buttons')
	.addEventListener('click', (val) => {});

module.exports = spotify;
