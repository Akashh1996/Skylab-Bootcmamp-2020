class PokemonList {
	constructor(pokemons) {
		this.pokemons = pokemons;
	}
	createPokemonList() {
		const pokemonTopList = document.querySelector('.pokemonList__items');
		pokemonTopList.innerHTML = '';
		this.pokemons.forEach((name) => {
			const createLi = document.createElement('li');
			const createAnchor = document.createElement('a');
			createAnchor.setAttribute(
				'href',
				`../detail/detail-component.html?pokemonName=${name.name}`
			);
			createAnchor.innerText = `${name.name}`;
			createLi.appendChild(createAnchor);
			pokemonTopList.appendChild(createLi);
		});
	}
}

(async () => {
	await store.loadPokemonList();
	let pokemons = store.getPokemonList();
	let pokemonList = new PokemonList(pokemons);
	pokemonList.createPokemonList();
	const nextBtn = document.querySelector('.next');
	const previousBtn = document.querySelector('.previous');

	nextBtn.addEventListener('click', async function () {
		const nextPokemons = _pokemons.next;
		if (nextPokemons === null) return;
		const offsetLimitArr = getOffsetLimit(nextPokemons);
		await store.loadPokemonList(offsetLimitArr);
		pokemons = store.getPokemonList();
		pokemonList = new PokemonList(pokemons);
		pokemonList.createPokemonList();
	});
	previousBtn.addEventListener('click', async function () {
		const previousPokemons = _pokemons.previous;
		if (previousPokemons === null) return;
		const offsetLimitArr = getOffsetLimit(previousPokemons);
		await store.loadPokemonList(offsetLimitArr);
		pokemons = store.getPokemonList();
		pokemonList = new PokemonList(pokemons);
		pokemonList.createPokemonList();
	});
	console.log(_pokemons);
})();
