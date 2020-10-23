let _pokedex;
let _pokemon;
let _ability;

class Store {

    async loadPokedex () {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        let pokedex = await response.json();
        _pokedex = pokedex
        return Promise.resolve(_pokedex)
    }

    async loadPokemon (id) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pokemon = await response.json();
        _pokemon = pokemon
        return Promise.resolve(_pokemon)
    }

    async loadAbilityPokemon (abilityId) {
        let response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityId}`)
        let ability = await response.json()
        _ability = ability
        return Promise.resolve(_ability)
    }

    anchorPokedex(pokedex) {
		let li = '';
		for (let index = 0; index < pokedex.results.length; index++) {
			li += `<li><a href=./detail.html?id=${[index+1]}>${pokedex.results[index].name}</a></li>`;
		}
		return li;
    }

    statsPokemon(pokemon) {
		let li = '';
		for (let index = 0; index < pokemon.stats.length; index++) {
			li += `<div id="box"><div class="percent"><svg><circle cx="45" cy="45" r="37"></circle><circle cx="45" cy="45" r="37"></circle></svg><div class="number"><span>${pokemon.stats[index].base_stat}</span></div></div><span>${pokemon.stats[index].stat.name}</span></div>`;
		}
		return li;
    }

    descriptionPokemon(pokemon, description, skill) {
        let li = '';
        for (let index = 0; index < pokemon[description].length; index++) {
            li+= `<li>${pokemon[description][index][skill].name}</li>`
        }
        return li
    }
    
    abilityAnchorPokemon(id, pokemon, abilities, ability) {
		let li = '';
		for (let index = 0; index < pokemon[abilities].length; index++) {
			li += `<li><a href=./ability.html?id=${id}&ability=${pokemon[abilities][index][ability].url.replace('https://pokeapi.co/api/v2/ability/','')}>${pokemon[abilities][index][ability].name}</a></li>`;
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