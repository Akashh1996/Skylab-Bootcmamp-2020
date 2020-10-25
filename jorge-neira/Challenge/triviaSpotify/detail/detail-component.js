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
			optionGameBtn: document.querySelectorAll('.gameBtn'),
			scoreGameSpan: document.querySelector('.statusScore'),
			gameScore: document.querySelector('.gameScore'),
			pauseStatusBtn: document.querySelector('.pauseBtn'),
			nextStatusBtn: document.querySelector('.nextBtn'),
			exitStatusBtn: document.querySelector('.exitBtn')
		};
		const gameVariables = {
			secondsRemaining: 30,
			roundCounter: 0,
			gameStatus: true,
			currentGameScore: 0
		};
		const getGenresList = (genres) => {
			genres.forEach((element, index) => {
				if (index > 2) return;
				const createLiGenres = document.createElement('li');
				createLiGenres.textContent = element;
				DOMElements.artistGenres.appendChild(createLiGenres);
			});
		};

		const generateThreeRandomNumbers = () => {
			let randomNumForWrongAnswer = [];
			while (randomNumForWrongAnswer.length !== 3) {
				const randomNum = Math.floor(Math.random() * 8);
				if (randomNumForWrongAnswer.includes(randomNum)) continue;
				randomNumForWrongAnswer.push(randomNum);
			}
			return randomNumForWrongAnswer;
		};

		const setCurrentRound = (tracks, currentRound = 0) => {
			const wrongAnswerIndex = generateThreeRandomNumbers();
			const curentArtistSong = [];
			curentArtistSong.push(tracks[currentRound].name);
			DOMElements.artistPreview.autoplay = true;
			DOMElements.artistPreview.src = tracks[currentRound].preview_url;
			console.log(curentArtistSong[0]);
			const randomTracks = [];
			tracks.forEach((track) => {
				if (track.name !== curentArtistSong[0]) {
					randomTracks.push(track.name);
				}
			});
			wrongAnswerIndex.forEach((wrongTracks) => {
				curentArtistSong.push(randomTracks[wrongTracks]);
			});
			console.log(curentArtistSong);
			DOMElements.optionGameBtn.forEach((btnOption, index) => {
				btnOption.textContent = `${curentArtistSong[index]}`;
			});
		};

		const updateScore = () => {
			gameVariables.currentGameScore++;
		};

		const setGameTimer = () => {
			if (gameVariables.gameStatus) {
				let timer = setInterval(() => {
					gameVariables.secondsRemaining--;
					console.log(gameVariables.secondsRemaining);
					if (gameVariables.secondsRemaining <= 0) {
						gameVariables.secondsRemaining = 30;
						gameVariables.roundCounter++;
						// setGameTimer();
						setCurrentRound(this.topTracks, gameVariables.roundCounter);
						clearInterval(timer);
					}
				}, 1000);
			}
		};

		(() => {
			DOMElements.artistName.textContent = this.name;
			DOMElements.artistFollowers.textContent = this.followers;
			DOMElements.artistImage.src = this.image;
			getGenresList(this.genres);
			// setGameTimer();
			// setCurrentRound(this.topTracks);
		})();

		DOMElements.exitStatusBtn.addEventListener('click', function () {});
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
