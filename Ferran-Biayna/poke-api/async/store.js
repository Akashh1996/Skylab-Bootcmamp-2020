let _pokedex;
let _pokemon;
let _form;
let _ability;

class Store {

	async loadPokedex() {
		let url ='https://pokeapi.co/api/v2/pokemon?limit=1050';
		try {
			let response = await fetch(url);
			let pokedex = await response.json();
			return (_pokedex = pokedex);
		} catch (error) {
			return `There was an error`;
		}
	}

	async loadPokemon(id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        try {
            let response = await fetch(url);
		    let pokemon = await response.json();
		    return (_pokemon = pokemon);
        } catch (error) {
            return `No information available`;
        }
	}

	async loadformPokemon(id) {
		let url =`https://pokeapi.co/api/v2/pokemon-form/${id}`;
		try {
			let response = await fetch(url);
			let form = await response.json();
			return (_form = form);
		} catch (error) {
			return `https://i.pinimg.com/originals/00/2d/57/002d5714c44f88a16c1f0bdfa97ca05e.jpg`;
		}
	}

	async loadAbilityPokemon(abilityId) {
        let url = `https://pokeapi.co/api/v2/ability/${abilityId}`
        try {
            let response = await fetch(url);
		    let ability = await response.json();
		    return (_ability = ability);
        } catch (error) {
            return `No information available`;
        }
    }

	anchorPokedex(pokedex) {
		let li = '';
		for (let index = 0; index < pokedex.results.length; index++) {
			li += `<li><a href=./detail.html?id=${[index + 1]}>${
				pokedex.results[index].name
			}</a></li>`;
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
			li += `<li>${pokemon[description][index][skill].name}</li>`;
		}
		return li;
	}

	abilityAnchorPokemon(id, pokemon, abilities, ability) {
		let li = '';
		for (let index = 0; index < pokemon[abilities].length; index++) {
			li += `<li class="anchorlist"><a href=./ability.html?id=${id}&ability=${pokemon[abilities][
				index
			][ability].url.replace('https://pokeapi.co/api/v2/ability/', '')}>${
				pokemon[abilities][index][ability].name
			}</a></li>`;
		}
		return li;
	}

	languageAbility(ability) {
		for (let index = 0; index < ability.effect_entries.length; index++) {
			if (ability.effect_entries[index].language.name === 'en') {
				return ability.effect_entries[index].effect;
			}
		}
    }
}

const store = new Store();

module.exports = store;
