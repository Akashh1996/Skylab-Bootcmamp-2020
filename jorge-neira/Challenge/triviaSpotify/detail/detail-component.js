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
			pauseStatusBtn: document.querySelector('.pauseBtn'),
			nextStatusBtn: document.querySelector('.nextBtn'),
			exitStatusBtn: document.querySelector('.exitBtn')
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
				const randomNum = Math.floor(Math.random() * 9);
				if (randomNumForWrongAnswer.includes(randomNum)) continue;
				randomNumForWrongAnswer.push(randomNum);
			}
			console.log(randomNumForWrongAnswer);
			return randomNumForWrongAnswer;
		};

		const setCurrentRound = (tracks, currentRound = 0) => {
			const wrongAnswerIndex = generateThreeRandomNumbers();
			const curPreviewName = [];
			curPreviewName.push(tracks[currentRound].name);
			console.log(curPreviewName);
			// DOMElements.artistPreview.autoplay = true;
			DOMElements.artistPreview.src = tracks[currentRound].preview_url;
			const randomTracks = tracks
				.filter((track, index) => {
					if (track.name !== curPreviewName[index]) return track;
				})
				.map((trackName) => {
					return trackName.name;
				});
			console.log(randomTracks);
			debugger;
			wrongAnswerIndex.forEach((wrongTracks) => {
				curPreviewName.push(randomTracks[wrongTracks]);
			});
			console.log(curPreviewName);
		};

		const updateScore = () => {};

		const nextRound = () => {
			let secondsRemaining = 30;
			let timer = setInterval(() => {
				secondsRemaining--;
				console.log(secondsRemaining);
				if (secondsRemaining <= 0) {
					setCurrentRound(this.topTracks);
					updateScore();
					clearInterval(timer);
					nextRound();
				}
			}, 1000);
		};

		(() => {
			DOMElements.artistName.textContent = this.name;
			DOMElements.artistFollowers.textContent = this.followers;
			DOMElements.artistImage.src = this.image;
			getGenresList(this.genres);
			// nextRound();
			setCurrentRound(this.topTracks);
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
