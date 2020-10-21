let _pokedex;
let _pokemon;
let _form;

class Store {

    loadPokedex () {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
        .then((response) => {
            return response.json();
        })
        .then((pokedex) => {
            _pokedex = pokedex;
            return _pokedex
        });
    }

    loadPokemon (id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((pokemon) => {
            _pokemon = pokemon;
            return _pokemon
        })
    }

    formPokemon (id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((form) => {
            _form = form;
            return _form
        });
    }

    anchorPokedex(pokedex) {
		var li = '';
		for (var index = 0; index < pokedex.results.length; index++) {
			li += `<li><a href=./detail.html?id=${[index+1]}>${pokedex.results[index].name}</a></li>`;
		}
		return li;
    }

    statsPokemon(pokemon) {
		var li = '';
		for (var index = 0; index < pokemon.stats.length; index++) {
			li += `<div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>${pokemon.stats[index].base_stat}</span></div></div><span>${pokemon.stats[index].stat.name}</span></div>`;
		}
		return li;
	}

    descriptionPokemon(pokemon, description, skill) {
        var li = '';
        for (var index = 0; index < pokemon[description].length; index++) {
            li+= `<li>${pokemon[description][index][skill].name}</li>`
        }
        return li
    }
    
}

const store = new Store();

module.exports = store;