let _pokedex;
let _pokemon;
let _ability;

class Store {

    loadPokedex () {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
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

    loadAbilityPokemon (abilityId) {
        return fetch(`https://pokeapi.co/api/v2/ability/${abilityId}`)
        .then((response) => {
            return response.json();
        })
        .then((ability) => {
            _ability = ability;
            return _ability
        });
    }

    anchorPokedex(pokedex) {
		var li = '';
		for (let index = 0; index < pokedex.results.length; index++) {
			li += `<li><a href=./detail.html?id=${[index+1]}>${pokedex.results[index].name}</a></li>`;
		}
		return li;
    }

    statsPokemon(pokemon) {
		var li = '';
		for (let index = 0; index < pokemon.stats.length; index++) {
			li += `<div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>${pokemon.stats[index].base_stat}</span></div></div><span>${pokemon.stats[index].stat.name}</span></div>`;
		}
		return li;
    }

    descriptionPokemon(pokemon, description, skill) {
        var li = '';
        for (let index = 0; index < pokemon[description].length; index++) {
            li+= `<li>${pokemon[description][index][skill].name}</li>`
        }
        return li
    }
    
    abilityAnchorPokemon(id, pokemon, description, skill) {
		var li = '';
		for (let index = 0; index < pokemon[description].length; index++) {
			li += `<li><a href=./ability.html?id=${id}&ability=${pokemon[description][index][skill].url.replace('https://pokeapi.co/api/v2/ability/','')}>${pokemon[description][index][skill].name}</a></li>`;
		}
		return li;
    }

    languageAbility(ability) {
        for (let index = 0; index < ability.effect_entries.length; index++) {
            if (ability.effect_entries[index].language.name==='en') {
                return ability.effect_entries[index].effect
            }
        }
    }
}

const store = new Store();

module.exports = store;