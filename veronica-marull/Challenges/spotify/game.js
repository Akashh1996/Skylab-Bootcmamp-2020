function Artist(name, album, photo) {
	(this.name = name), (this.album = album), (this.photo = photo);
}

class Question {
	constructor(artist, wrongOptions) {
		this.artist = artist;
		this.options = wrongOptions;
		this.insertAnswerInOption();
	}

	insertAnswerInOption() {
		var randomIndex = Math.floor(Math.random() * this.options.length);
		this.options.splice(randomIndex, 0, this.artist.album);
	}

	checkAnswer(option) {
		return option === this.artist.album;
	}
}

async function getArtists() {
	let artists = [];
	const releases = await spotiStore.getNewReleases();

	for (album of releases.albums.items) {
		let currentArtist = new Artist(
			album.artists[0].name,
			album.name,
			album.images[0].url
		);
		artists.push(currentArtist);
	}
	return artists;
}

function randomChoiseN(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError('getRandom: more elements taken than available');
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

function createQuestions(artists) {
	let questions = [];
	let allOptions = [];

	for (artist of artists) {
		allOptions.push(artist.album);
	}

	for (artist of artists) {
		let allWrongOptions = allOptions.filter(
			(element) => element !== artist.album
		);
		let wrongOptions = randomChoiseN(allWrongOptions, 3);
		let question = new Question(artist, wrongOptions);
		questions.push(question);
	}

	return questions;
}

async function createGame() {
	let artists = await getArtists();
	let questions = createQuestions(artists);

	return questions;
}
