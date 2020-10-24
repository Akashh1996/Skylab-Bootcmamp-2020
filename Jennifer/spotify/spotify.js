const myArtists = [
	'3m1an5fzquhCtk4UnhmLmc',
	'53XhwfbYqKCa1cC15pYq2q',
	'5M9Bb4adKAgrOFOhc05Y50',
	'6M2wZ9GZgrQXHCFfjv46we',
	'4q3ewBCX7sLwd24euuV69X',
	'5lwmRuXgjX8xIwlnauTZIP',
	'451DVjaBuGYfvDfvG9MxaG'
];

//1.EL CHOJIN
//2. IMAGINE DRAGONS
//3.PABLO ALBORÁN
//4. ZPU
//5. RAPSUSKLEI

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

async function changeValues(i) {
	const autor = await spotifyStore.getArtist(myArtists[i]);
	document.getElementById('img-autor').setAttribute('src', autor.images[1].url);

	document.getElementById('name-actor').innerHTML = autor.name.toUpperCase();

	const albumAutor = await spotifyStore.getAlbums(myArtists[i]);
	document.getElementById(`answer${numberRandom}`).innerHTML =
		albumAutor.items[1].name;
}

(async () => {
	for (let i = 0; i < 4; i++) {
		debugger;
		numberRandom = random(0, 3);
		await spotifyStore.getToken();
		changeValues(i);
	}
})();
