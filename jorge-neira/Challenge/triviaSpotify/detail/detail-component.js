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
			artistAudio: document.querySelector('.gameboard-artist__audio'),
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
		const generateThreeRandomNumbers = () => {
			let arrnum = [];
			for (let index = 0; index < 3; index++) {
				while (condition) {
					const randomNum = Math.floor(Math.random() * 9);
				}
			}
		};

		const createRandomQuizFromTracks = (tracks) => {
			// for (let curSong = 0; curSong < tracks.length; curSong++) {
			// 	setInterval(() => {}, 30000);
			// }
			const randomNumberToStartGame = generateRandomNumber();
			const curPreviewName = tracks[randomNumberToStartGame].name;
			const randomTracks = tracks
				.filter((track) => {
					if (track.name !== curPreviewName) return track;
				})
				.map((trackName) => {
					return trackName.name;
				});
			const wrongPreviewNames = 'A';

			DOMElements.artistPreview.src =
				tracks[randomNumberToStartGame].preview_url;
			// DOMElements.artistPreview.autoplay = true;
			console.log(randomTracks);
			console.log(curPreviewName);
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
	spotifyGame.playGame();
})();
