let _pokemons;
class Store {
	loadPokemonsData() {
		return fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
			.then((response) => response.json())
			.then((value) => (_pokemons = value))
			.catch((error) => console.log(error));
	}
	getName() {
		return _pokemons;
	}
}

function test() {
	console.log(store.loadPokemonsData());
}

const store = new Store();
module.exports = store;
