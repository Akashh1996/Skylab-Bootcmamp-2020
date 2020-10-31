//spotiStore.getToken();
//let newreleases = spotiStore.getNewReleases();

const artist = document.getElementById('artist');
const artist_foto = document.getElementById('artist_foto');
const options = document.getElementById('options');
const album1 = document.getElementById('album1');

const startbtn = document.getElementById('start-btn');

startbtn.addEventListener('click', function () {
	startbtn.classList.add('hidden');
	artist.classList.remove('hidden');
	artist_foto.classList.remove('hidden');
	options.classList.remove('hidden');
});

/*
async function showImageArtistById(artistId) {
	const artist = await spotiStore.getInfoArtist(artistId);
	let url = artist.images[0].url;
	artist_foto.innerHTML = `<img src=${url} class="imagesize">`;
}

async function showNameArtistById(artistId) {
	const artistName = await spotiStore.getInfoArtist(artistId);
	artist.innerText = artistName.name;
}*/

//showInfoArtist('66CXWjxzNUsdJxJ2JdwvnR');

async function getArtistsIds() {
	const releases = await spotiStore.getNewReleases();
	for (album of releases.albums.items) {
		console.log('Album: ', album.artist.name);
		console.log('Album: ', album.id);

		artist.innerText += album.artists[0].name;
	}
}

getArtistsIds();

/*
showNameArtistById('2FFrhWZS9vJsh2UvxYPRr6');
showImageArtistById('2FFrhWZS9vJsh2UvxYPRr6');*/
