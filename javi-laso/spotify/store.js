const _clientId = '05dc5f8122b14c52afb72bb104b0cd15';
const _clientIdSecret = 'cac1ad72eabb4308aeb18bb6e963405f';
let _spotifyToken;
let _artist;
let _artistTopTracks;
let _categories;
const _seconds = 15;
let _secondsTimer;
let _functionTimer;

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

	updateValueHtml(element, property, value) {
		element[property] = value;
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

	setArtist(artist) {
		_artist = artist;
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
		this.updateValueHtml(container, 'innerHTML', artist.name);
		return artist.name;
	}

	setArtistImagetoContainer(imgContainer) {
		try {
			const artist = this.getArtist();
			let artistPicture = artist.images.find((element) => {
				return element.height >= 160;
			});
			imgContainer.setAttribute('src', artistPicture.url);
			return artistPicture.url;
		} catch (error) {
			return null;
		}
	}

	getClassNameFromContainerInArray(formContainer, className) {
		const labels = formContainer.querySelectorAll(`.${className}`);
		return [].slice.call(labels);
	}

	getRandomElementFromArray(labelsArray) {
		const randomNumber = Math.floor(Math.random() * labelsArray.length);
		return labelsArray[randomNumber];
	}

	async setRandomSongsToInputs(formContainer, artists, resultContainer) {
		// Creates an array with the ids of the artists
		const artistsArray = Object.values(artists);
		// Takes the artist that will be the answer
		let actualArtist = this.getArtist();
		// Put the labels in an array
		let buttonsArray = this.getClassNameFromContainerInArray(
			formContainer,
			'button-answer'
		);
		// Choose a random label input to put the song of the answer artist
		let randomButton = this.getRandomElementFromArray(buttonsArray);
		// Chooses a random song from the artist
		let randomSong = await this.getRandomSongFromTopTracks(actualArtist.id);
		// Puts the random song in the random label chosen
		this.updateValueHtml(randomButton, 'innerHTML', randomSong);
		// Set the input to the correct answer
		this.setCorrectButton(randomButton, resultContainer);
		// this.setCorrectAnswer(randomLabel);
		// Removes the answer artist from the array to choose
		const actualArtistIndex = artistsArray.findIndex(
			(element) => element === actualArtist.id
		);
		artistsArray.splice(actualArtistIndex, 1);
		// Removes the label from the labels
		let actualLabelIndex = buttonsArray.findIndex(
			(element) => element === randomButton
		);
		buttonsArray.splice(actualLabelIndex, 1);
		// Puts random songs in the rest of buttons
		for (let index = 0; index < buttonsArray.length; index++) {
			// Get a random number and choses an artist
			const randomArtist = Math.floor(Math.random() * artistsArray.length);
			// Takes a random song from top tracks of the artist selected
			randomSong = await this.getRandomSongFromTopTracks(
				artistsArray[randomArtist]
			);
			// Choses the next button
			randomButton = buttonsArray[index];
			// Updates the button with the name of the random song chosen
			this.updateValueHtml(randomButton, 'innerHTML', randomSong);
			// The button will be an incorrect answer
			this.setIncorrectButton(randomButton, resultContainer);
		}
	}

	setCorrectButton(button, resultContainer) {
		button.addEventListener('click', () => {
			this.updateValueHtml(resultContainer, 'innerHTML', 'CORRECT!');
			this.stopTimerFunction();
			this.stopTimerSeconds();
		});
	}

	setIncorrectButton(button, resultContainer) {
		button.addEventListener('click', () => {
			this.updateValueHtml(resultContainer, 'innerHTML', 'INCORRECT!');
			this.stopTimerFunction();
			this.stopTimerSeconds();
		});
	}

	async setNewGame(
		titleContainer,
		artists,
		imgContainer,
		formContainer,
		resultContainer
	) {
		await store.setRandomArtistNameToContainer(titleContainer, artists);
		store.setArtistImagetoContainer(imgContainer);
		store.setRandomSongsToInputs(formContainer, artists, resultContainer);
	}

	getSeconds() {
		return _seconds;
	}

	timerSeconds(timerContainer) {
		let second = this.getSeconds();
		_secondsTimer = setInterval(() => {
			if (second > 9) {
				this.updateValueHtml(timerContainer, 'innerHTML', `00:${second}`);
			} else {
				this.updateValueHtml(timerContainer, 'innerHTML', `00:0${second}`);
			}
			second--;
			second = second < 0 ? this.getSeconds() : second;
		}, 1000);
	}

	stopTimerSeconds() {
		clearInterval(_secondsTimer);
	}

	timerFunction(
		titleContainer,
		artists,
		imgContainer,
		formContainer,
		resultContainer,
		timerContainer
	) {
		_functionTimer = setInterval(() => {
			this.updateValueHtml(resultContainer, 'innerHTML', '');
			this.updateValueHtml(
				timerContainer,
				'innerHTML',
				`00:${this.getSeconds() + 1}`
			);
			this.setNewGame(
				titleContainer,
				artists,
				imgContainer,
				formContainer,
				resultContainer
			);
		}, (this.getSeconds() + 1) * 1000);
	}

	stopTimerFunction() {
		clearInterval(_functionTimer);
	}
}

const store = new SpotifyStore();

module.exports = SpotifyStore;
