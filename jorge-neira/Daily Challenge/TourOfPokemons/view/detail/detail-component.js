class PokemonDetail {
	constructor(pokemonDetail) {
		this.pokemonDetail = pokemonDetail;
	}
	getPokeId() {
		return this.pokemonDetail.id;
	}
	getPokeBaseExperience() {
		return this.pokemonDetail.base_experience;
	}

	createDetailView(pokeName, id, baseExperience) {
		const pokeTitle = document.querySelector('.pokemon-title');
		const pokeId = document.querySelector('.pokeId');
		const pokeBaseExperience = document.querySelector('.pokeBaseExperience');
		pokeTitle.textContent = `${pokemonLocationName}`;
		pokeId.textContent = `${id}`;
		pokeBaseExperience.textContent = `${baseExperience}`;
	}
}

const curUrlSearch = location;
const pokemonLocationName = getPokemonUrlName(curUrlSearch);
store.loadPokemonDetail(pokemonLocationName).then(() => {
	const pokemonDetail = new PokemonDetail(_pokemonsDetail);
	pokemonDetail.createDetailView(
		pokemonLocationName,
		pokemonDetail.getPokeId(),
		pokemonDetail.getPokeBaseExperience()
	);
});
