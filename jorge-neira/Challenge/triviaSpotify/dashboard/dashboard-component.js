class SpotifyArtistGrid {
	constructor(artistArr) {
		this.artistArr = artistArr;
	}
	createDashBoardGrid() {
		const artistGridContainer = document.querySelector('.artists__images');
		this.artistArr.forEach((artist) => {
			const artistBlockImg = document.createElement('div');
			artistBlockImg.className = 'artist-img__item';
			const createAnchorImg = document.createElement('a');
			createAnchorImg.setAttribute(
				'href',
				`../detail/detail-component.html?id=${artist.id}`
			);
			const artistImg = document.createElement('img');
			artistImg.className = 'artist-photo';
			artistImg.setAttribute('src', artist.images[1].url);
			artistImg.setAttribute('alt', 'artist-photo');
			artistImg.setAttribute('height', '100%');
			artistGridContainer.appendChild(artistBlockImg);
			artistBlockImg.appendChild(createAnchorImg);
			createAnchorImg.appendChild(artistImg);
		});
	}
}

(async () => {
	await spotifyStore.getToken();
	const artistList = await spotifyStore.getSeveralArtist();
	const spotifyArtistGrid = new SpotifyArtistGrid(artistList);
	spotifyArtistGrid.createDashBoardGrid();
})();
