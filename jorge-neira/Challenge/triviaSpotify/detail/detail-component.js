class SpotifyGame {
	constructor(
		artistName,
		artistImage,
		artistFollowers,
		artistGenres,
		artistTopTracksArr
	) {
		this.name = artistName;
		this.image = artistImage;
		this.followers = artistFollowers;
		this.genres = artistGenres;
		this.topTracks = artistTopTracksArr;
	}
	playGame() {
		const DOMElements = {
			artistName: document.querySelector('.artist-info-name'),
			artistFollowers: document.querySelector('.artist-followers'),
			artistGenres: document.querySelector('.artist-info-listGenres'),
			artistImage: document.querySelector('.gameboard-artist__img'),
			artistPreview: document.querySelector('.gameboard-artist__preview'),
			artistGameBtn: document.querySelectorAll('gameBtn')
		};
		const getGenresList = (genres) => {
			genres.forEach((element, index) => {
				if (index > 2) return;
				const createLiGenres = document.createElement('li');
				createLiGenres.textContent = element;
				DOMElements.artistGenres.appendChild(createLiGenres);
			});
		};

		const generateRandomNumber = () => {
			const randomNum = Math.floor(Math.random() * 10);
			return randomNum;
		};

		const createRandomQuizFromTracks = (tracks) => {
			const randomNumberToStartGame = generateRandomNumber();
			console.log(this.topTracks);
			console.log(this.topTracks[1]);
			DOMElements.artistPreview.setAttribute(
				'src',
				`${tracks[randomNumberToStartGame].preview_url}`
			);
		};

		(() => {
			DOMElements.artistName.textContent = this.name;
			DOMElements.artistFollowers.textContent = this.followers;
			DOMElements.artistImage.src = this.image;
			getGenresList(this.genres);
			createRandomQuizFromTracks(this.topTracks);
		})();
	}
}
let artistInfo, artistTopTracks;
const curLocation = location;
const curIdFromLocation = getIdParam(curLocation);
(async () => {
	await spotifyStore.getToken();
	artistInfo = await spotifyStore.getArtist(curIdFromLocation);
	artistTopTracks = await spotifyStore.getTopTracks(curIdFromLocation);
	const spotifyGame = new SpotifyGame(
		artistInfo.name,
		artistInfo.images[0].url,
		artistInfo.followers.total,
		artistInfo.genres,
		artistTopTracks.tracks
	);
	console.log(artistTopTracks.tracks[1]);

	spotifyGame.playGame();
})();
