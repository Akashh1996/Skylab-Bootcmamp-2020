let pokeListCont = document.getElementById('pokemon-items');
for (i = 0; i < 11; i++) {
	let pokeListItem = document.createElement('li');
	document.body.appendChild(pokeListItem);
	pokeListItem.innerHTML = 'Hello World';
}
