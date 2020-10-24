class SpotifyGame {
	constructor(artistArr) {
		this.artistArr = artistArr;
	}
	createDashBoardGrid() {
		const artistGridContainer = document.querySelector('.artists__images');
		this.artistArr.forEach((artist) => {
			const artistBlockImg = document.createElement('div');
			artistBlockImg.className = 'artist-img__item';
			const artistImg = document.createElement('img');
			artistImg.className = 'artist-photo';
			artistImg.setAttribute('src', artist.images[1].url);
			artistImg.setAttribute('alt', 'artist-photo');
			artistImg.setAttribute('height', '100%');
			artistGridContainer.appendChild(artistBlockImg);
			artistBlockImg.appendChild(artistImg);
		});
	}
}

(async () => {
	await spotifyStore.getToken();
	const artistList = await spotifyStore.getArtist();
	const spotifyGame = new SpotifyGame(artistList);
	spotifyGame.createDashBoardGrid();
	console.log(artistList);
})();
