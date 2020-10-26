let myPokeAbilities;
class Abilities {
	constructor(abilities) {
		this.abilities = abilities;
	}
	async loadPokemonAbility(url) {
		const reponse = await fetch(url);
		const ability = await reponse.json();
		myPokeAbilities = ability.effect_entries[0].effect;
	}
	getPokeName() {
		return this.abilities.name;
	}
	getAdditionalInfo() {
		return `Height: ${this.abilities.height} -- Weight: ${this.abilities.weight} --`;
	}

	async getAbilities() {
		const abilityArr = this.abilities.abilities;
		let arr = `${abilityArr[0].ability.name}`;
		await this.loadPokemonAbility(abilityArr[0].ability.url);
		return arr;
	}
	getSpriteImg() {
		return this.abilities.sprites.other.dream_world.front_default;
	}
	printAbilities(abilityName, ability) {
		const infoContainer = document.querySelector('.additional-info__container');
		infoContainer.innerHTML = '';
		const createSpan = document.createElement('span');
		createSpan.className = 'pokemonAbilities';
		createSpan.textContent = `${abilityName}: ${ability}`;
		infoContainer.appendChild(createSpan);
	}
}

const curUrlSearch = location;
const pokemonLocationName = getPokemonUrlName(curUrlSearch);
(async () => {
	await store.loadPokemonDetail(pokemonLocationName);
	let pokemonAbility = new Abilities(_pokemonsDetail);
	const pokemonImage = document.querySelector('.pokemonImage');
	pokemonImage.setAttribute('src', `${pokemonAbility.getSpriteImg()}`);
	const pokemonAbilityName = document.querySelector('.pokemonAbility-name');
	pokemonAbilityName.textContent = `${pokemonAbility.getPokeName()}`;
	const pokemonAbilityInfo = document.querySelector('.pokemonAbility-info');
	pokemonAbilityInfo.textContent = `${pokemonAbility.getAdditionalInfo()}`;
	console.log(myPokeAbilities);
	pokemonAbility.printAbilities(pokemonAbility.getAbilities());
})();
