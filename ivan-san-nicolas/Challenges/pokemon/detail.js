function getNameFromURL(location) {
    let locationNameAndValue = location.slice(1, location.length);
    let separatedName = locationNameAndValue.split('=');
    let name = separatedName[1];
    return pokemonInfo(name, pokeStore);
}

async function pokemonInfo(name, pokeStore) {
    await pokeStore.loadPokemonFromAPIByName(name);
    const actualPokemon = await pokeStore.getPokemon();
    const pokemonStats = document.getElementById('pokemon__detail__info__stats');
    const pokemonTitle = document.getElementById('pokemon-detail-title')
    pokemonTitle.innerHTML = name;
    const pokemonAbilities = document.getElementById('pokemon-abilities');
    const pokemonAbilityTitle = document.getElementById('')
    for (property in actualPokemon) {
        if ((typeof actualPokemon[property] !== 'object') && (property === 'base_experience' || property === 'height' || property === 'id' || property === 'weight')) {
            let element = document.createElement('div');
            element.innerHTML = `<div class="pokemon-detail__info__block">
                    <span class="pokemon-detail__info__block__property-name" id="pokemon-detail-${property}"></span>
                    <span class="pokemon-detail__info__block__property-value" id="pokemon-detail-${actualPokemon[property]}"></span>
                </div>`;
            pokemonStats.appendChild(element);
            document.getElementById(`pokemon-detail-${property}`).innerHTML = property;
            document.getElementById(`pokemon-detail-${actualPokemon[property]}`).innerHTML = actualPokemon[property];
        } else if (property === 'sprites') {
            const imageBlock = document.getElementById('pokemon-image')
            const image = actualPokemon[property].front_default;
            imageBlock.innerHTML = `<img src="${image}" id="pokemon-detail-${property}"></img>`;
        } else if (property === 'abilities') {
            for (index in actualPokemon[property]) {
                const abilityName = actualPokemon[property][index].ability.name;
                await pokeStore.loadAbilityFromAPIByName(abilityName);
                const actualAbility = pokeStore.getAbility();
                const actualAbilityName = actualAbility.name
                let element = document.createElement('div');
                element.innerHTML = `<div class="pokemon-detail__info__block">
                <span class="pokemon-detail__info__block__property-name pokemon-ability" id="pokemon-detail-ability-${[index]}-name" onclick></span>
                <span class="pokemon-detail__info__block__property-value pokemon-ability" id="pokemon-detail-ability-${[index]}" onclick></span>
                </div>`;
                pokemonStats.appendChild(element);
                document.getElementById(`pokemon-detail-ability-${[index]}-name`).innerHTML = `ability:`
                document.getElementById(`pokemon-detail-ability-${[index]}`).innerHTML = actualAbilityName;
                document.getElementById(`pokemon-detail-ability-${[index]}-name`).addEventListener('click', (actualAbilityName) => {
                    pokemonAbilities.style.display = 'flex';
                    pokemonAbilityTitle.innerHTML = actualAbilityName;
                });
            }
        }
    }
}

getNameFromURL(location.search, pokeStore);

/*
else {
            if (property !== 'images') {
                let element = document.createElement('div');
                element.innerHTML = `<div class="hero-detail__info__block">
                        <span class="hero-detail__info__block__property-name stats" id="hero-detail-${property}"></span>
                    </div>`;
                heroProps.appendChild(element);
                document.getElementById(`hero-detail-${property}`).innerHTML = property;
                element.addEventListener('click', (property) => {
                    alert('funsiona');
                });
            }
        }
*/