let pokemon;
let pokemonList = [];
let pokemonAbility;

class Store {
	loadPokemon() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
			.then((response) => response.json())
			.then((getPokemon) => {
				pokemonList = getPokemon;
				return getPokemon;
			});
	}

	getPokemon() {
		return pokemonList;
	}

	getPokemonByName(pokemonName) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
			(response) => {
				pokemon = response;
				return response;
			}
		);
	}

	getPok() {
		return pokemon;
	}

	setAbilitiesList() {
		let liElem = '';
		let array = pokemon['abilities'];
		for (let index = 0; index < array.length; index++) {
			liElem += `<a href=“/hability/hability.html?ability=${array[index].ability.name}“>
            <li class=“abilityLi”>${array[index].ability.name}</li></a>`;
		}
		return liElem;
	}
}

const store = new Store();

module.exports = store;
