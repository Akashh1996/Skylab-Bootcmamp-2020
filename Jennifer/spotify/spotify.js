const listArtists = [];

let indexInterval = 0;
let interval;
let puntosTotales = 0;
let correctObject = {};

const startGame = document.getElementById('start-Game');
startGame.addEventListener('click', () => {
	startGame.style.display = 'none';
	document.getElementById('answers').style.display = 'flex';
	addArtist();
});

document.getElementById('answers').childNodes.forEach((element) => {
	element.addEventListener('click', () => {
		clearInterval(interval);

		if (correctObject.track === element.innerHTML) {
			puntosTotales++;
			myInterval();
		} else {
			document.getElementById(`answer${correctObject.index}`).style.border =
				'3px solid red';
			setTimeout(() => {
				document.getElementById(`answer${correctObject.index}`).style.border =
					'none';
				myInterval();
			}, 1500);
		}
	});
});

const idArtists = [
	'4x1nvY2FN8jxqAFA0DA02H',
	'3m1an5fzquhCtk4UnhmLmc',
	'53XhwfbYqKCa1cC15pYq2q',
	'5M9Bb4adKAgrOFOhc05Y50',
	'6M2wZ9GZgrQXHCFfjv46we',
	'4q3ewBCX7sLwd24euuV69X',
	'5lwmRuXgjX8xIwlnauTZIP',
	'451DVjaBuGYfvDfvG9MxaG',
	'5WUlDfRSoLAfcVSX1WnrxN',
	'3fMbdgg4jU18AjLCKBhRSm'
];

const randomArtists = [
	'1Xyo4u8uXC1ZmMpatF05PJ',
	'3TVXtAsR1Inumwj472S9r4',
	'1uNFoZAHBGtllmzznpCI3s',
	'1vyhD5VmyZ7KMfW5gqLgo5',
	'6eUKZXaKkcviH0Ku9w2n3V',
	'66CXWjxzNUsdJxJ2JdwvnR',
	'64KEffDW9EtZ1y2vBYgq8T',
	'1HY2Jd0NmPuamShAr6KMms',
	'26VFTg2z8YR0cCuwLzESi2',
	'6qqNVTkY8uBg9cP3Jd7DAH',
	'4nDoRrQiYLoBzwC5BhVJzF',
	'04gDigrS5kc9YWfZHwBETP',
	'1EXjXQpDx2pROygh8zvHs4',
	'1ADdpen72RPuafRcv0YRBf',
	'5C4PDR4LnhZTbVnKWXuDKD',
	'7mUBMaZW1MXGswaneb0JTT',
	'4V8Sr092TqfHkfAA5fXXqG',
	'56n1NeXsTOOxjX3Z4lVMTJ',
	'7dGJo4pcD2V6oG8kP0tJRR',
	'66ArjpKRgw8vYBf9yhktto'
];

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

async function addArtist() {
	await spotifyStore.getToken();
	for (let i = 0; i < idArtists.length; i++) {
		const autor = await spotifyStore.getArtist(idArtists[i]);
		const albumAutor = await spotifyStore.getAlbums(idArtists[i]);
		const topSongs = await spotifyStore.getTopSongs(idArtists[i]);
		let artist = {
			name: autor.name,
			img: autor.images[1].url,
			album: albumAutor.items[1].name,
			track: [
				topSongs.tracks[0].name,
				topSongs.tracks[1].name,
				topSongs.tracks[2].name
			],

			randomTracks: await getRandomTracks()
		};
		listArtists.push(artist);
	}
	console.log(listArtists);

	myInterval();
}

function myInterval() {
	if (indexInterval < 9) {
		correctObject = changeValues(indexInterval);
		indexInterval++;

		interval = setInterval(() => {
			document.getElementById(`answer${correctObject.index}`).style.border =
				'3px solid red';
			setTimeout(() => {
				document.getElementById(`answer${correctObject.index}`).style.border =
					'none';
				correctObject = correctTrack = changeValues(indexInterval);
				indexInterval++;
				if (indexInterval > 9) {
					clearInterval(interval);
				}
			}, 1500);
		}, 11500);
	}
}

function changeValues(j) {
	position = [];
	numberRandom = random(0, 2);
	position.push(numberRandom);
	document.getElementById('img-autor').setAttribute('src', listArtists[j].img);

	document.getElementById('name-autor').innerHTML = listArtists[
		j
	].name.toUpperCase();

	let nameTrack = listArtists[j].track[numberRandom];

	document.getElementById(`answer${numberRandom}`).innerHTML = nameTrack;

	let correct = {
		track: nameTrack,
		index: numberRandom
	};

	for (let i = 0; i < 3; i++) {
		do {
			numberRandom = random(0, 3);
		} while (position.includes(numberRandom));
		document.getElementById(`answer${numberRandom}`).innerHTML =
			listArtists[j].randomTracks[i];
		position.push(numberRandom);
	}
	return correct;
}

async function getRandomTracks() {
	let randomTracks = [];
	let gettrack;
	for (var i = 0; i < 3; i++) {
		idRandomArtist = random(0, randomArtists.length - 1);
		do {
			idRandomArtist = random(0, randomArtists.length - 1);
			gettrack = await spotifyStore.getTopSongs(randomArtists[idRandomArtist]);
			gettrack = gettrack.tracks[0].name;
			numberRandom = random(0, 3);
		} while (randomTracks.includes(gettrack));
		randomTracks.push(gettrack);
	}
	return randomTracks;
}
