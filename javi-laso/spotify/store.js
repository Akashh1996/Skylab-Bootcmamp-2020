const _clientId = '05dc5f8122b14c52afb72bb104b0cd15';
const _clientIdSecret = 'cac1ad72eabb4308aeb18bb6e963405f';
let _spotifyToken;
let _artist;
let _artistTopTracks;
let _categories;
let selectedArtist;
let _correctAnswer;

class SpotifyStore {
	getClientId() {
		return _clientId;
	}

	getClientSecret() {
		return _clientIdSecret;
	}

	async requestSpotifyToken() {
		try {
			const response = await fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' + btoa(`${this.getClientId()}:${this.getClientSecret()}`)
				},
				body: 'grant_type=client_credentials'
			});
			const data = await response.json();
			return (_spotifyToken = data.access_token);
		} catch (tokenError) {
			_spotifyToken = null;
		}
	}

	getToken() {
		return _spotifyToken;
	}

	async requestArtist(artist) {
		const url = `https://api.spotify.com/v1/artists/${artist}`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.getToken()}`
			}
		});
		const artistObject = await response.json();
		_artist = artistObject;
		return artistObject;
	}

	getArtist() {
		return _artist;
	}

	async requestArtistTopTracks(artist) {
		const url = `https://api.spotify.com/v1/artists/${artist}/top-tracks?country=ES`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.getToken()}`
			}
		});
		const artistTracksJson = await response.json();
		let tracksArray = [];
		for (let index = 0; index < artistTracksJson['tracks'].length; index++) {
			tracksArray.push(artistTracksJson['tracks'][index]);
		}
		_artistTopTracks = tracksArray;
	}

	getArtistTopTracks() {
		return _artistTopTracks;
	}

	async getRandomSongFromTopTracks(artist) {
		await this.requestArtistTopTracks(artist);
		const topTracks = this.getArtistTopTracks();
		const number = Math.floor(Math.random() * topTracks.length);
		return topTracks[number].name;
	}

	async requestCategories() {
		const url = 'https://api.spotify.com/v1/browse/categories';
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.getToken()}`
			}
		});
		const data = await response.json();
		_categories = data.categories.items;
	}

	getCategories() {
		return _categories;
	}

	async setRandomArtistNameToContainer(container, artists) {
		const artistsArray = Object.values(artists);
		const randomArtist = Math.floor(Math.random() * artistsArray.length);
		await this.requestArtist(artistsArray[randomArtist]);
		const artist = this.getArtist();
		selectedArtist = artist;
		container.innerHTML = artist.name;
		return artist.name;
	}

	setRandomArtistImagetoContainer(imgContainer) {
		const artist = this.getArtist();
		const artistPicture = artist.images.find((element) => {
			return element.height === 160;
		});
		imgContainer.setAttribute('src', artistPicture.url);
		return artistPicture.url;
	}

	async setRandomSongsToInputs(formContainer, artists) {
		//Creates an array with the ids of the artists
		const artistsArray = Object.values(artists);
		//takes the artist that will be the answer
		let actualArtist = this.getArtist();
		// Choose a random label input to put the song of the answer artist
		const labels = formContainer.querySelectorAll('.songLabel');
		const labelsArray = [].slice.call(labels);
		let randomLabelNumber = Math.floor(Math.random() * labelsArray.length);
		let randomSongLabel = labelsArray[randomLabelNumber];
		// Chooses a random song from the artist
		let randomSong = await this.getRandomSongFromTopTracks(actualArtist.id);
		// Puts the random song in the random label chosen
		randomSongLabel.innerHTML = randomSong;
		// Set the input to the correct answer
		_correctAnswer = randomSongLabel;
		// Removes the answer artist from the array to choose
		const actualArtistIndex = artistsArray.findIndex(
			(elem) => elem === actualArtist.id
		);
		artistsArray.splice(actualArtistIndex, 1);
		// Removes the label from the labels
		let actualLabelIndex = labelsArray.findIndex(
			(elem) => elem === randomSongLabel
		);
		labelsArray.splice(actualLabelIndex, 1);
		// Puts random songs in the rest of labels
		for (let index = 0; index < labelsArray.length; index++) {
			const randomArtist = Math.floor(Math.random() * artistsArray.length);
			await this.requestArtist(artistsArray[randomArtist]);
			actualArtist = this.getArtist();
			randomSong = await this.getRandomSongFromTopTracks(actualArtist.id);
			randomSongLabel = labelsArray[index];
			randomSongLabel.innerHTML = randomSong;
		}
	}

	setCorrectAnswer(songLabel) {
		_correctAnswer = songLabel;
	}

	getCorrectAnswer() {
		return _correctAnswer;
	}

	async setArtistAndSongs(
		titleContainer,
		formContainer,
		imgContainer,
		artists
	) {
		await this.setRandomArtistNameToContainer(titleContainer, artists);
		this.setRandomArtistImagetoContainer(imgContainer);
		this.setRandomSongsToInputs(formContainer, artists);
	}

	checkCorrectAnswer(formContainer) {
		const inputs = formContainer.querySelectorAll('input');
		let selectedInput;
		debugger;
		for (let index = 0; index < inputs.length; index++) {
			if (inputs[index].checked === true) {
				selectedInput = inputs[index];
				break;
			}
		}
		if (selectedInput.parentNode === this.getCorrectAnswer().parentNode) {
			return true;
		}
		return false;
	}
}

const store = new SpotifyStore();

module.exports = SpotifyStore;
