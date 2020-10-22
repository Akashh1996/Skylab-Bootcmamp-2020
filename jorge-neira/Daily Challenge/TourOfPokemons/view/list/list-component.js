class PokemonList {
	constructor(pokemons) {
		this.pokemons = pokemons;
	}
	createPokemonList() {
		const pokemonTopList = document.querySelector('.pokemonList__items');
		this.pokemons.forEach((name) => {
			const createLi = document.createElement('li');
			const createAnchor = document.createElement('a');
			createAnchor.setAttribute(
				'href',
				`00/list/list-component.html?pokemonName=${name.name}`
			);
			createAnchor.innerText = `${name.name}`;
			createLi.appendChild(createAnchor);
			pokemonTopList.appendChild(createLi);
		});
	}
	showNextPokemons() {}
}

store.loadPokemonList().then(() => {
	const pokemons = store.getPokemonList();
	const pokemonList = new PokemonList(pokemons);
	const nextBtn = document.querySelector('.next');
	const previousBtn = document.querySelector('.previous');
	pokemonList.createPokemonList();

	nextBtn.addEventListener('click', function () {
		const nextPokemons = _pokemons.next;
		const offsetLimitArr = getOffsetLimit(nextPokemons);
		store.loadPokemonList(offsetLimitArr[0], offsetLimitArr[1]).then(() => {
			pokemonList.createPokemonList();
		});
	});
	previousBtn.addEventListener('click', function () {
		const previousPokemons = _pokemons.previous;
	});
});
