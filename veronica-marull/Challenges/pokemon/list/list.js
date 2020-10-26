/*
function drawPokemonList() {
	store.loadPokemons().then((pokemons) => {
		let list = document.getElementById('list');
		list.innerHTML = '';
		pokemons.forEach((pokemon) => {
			list.innerHTML += `<li><a href="../detail/detail.html?pokeName=${pokemon.name}">
                                    ${pokemon.name}
                                </a></li>`;
		});
	});
}
*/

async function drawPokemonList() {
	const pokemons = await store.loadPokemons();

	let list = document.getElementById('list');
	list.innerHTML = '';
	pokemons.forEach((pokemon) => {
		list.innerHTML += `<li><a href="../detail/detail.html?pokeName=${pokemon.name}">
                                    ${pokemon.name}
                                </a></li>`;
	});
}

drawPokemonList();
