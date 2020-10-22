function getNameFromURL(location) {
    let locationNameAndValue = location.slice(1, location.length);
    let separatedName = locationNameAndValue.split('=');
    let name = separatedName[1];
    return pokemonInfo(name, pokeStore);
}

async function pokemonInfo(name, pokeStore) {
    debugger;
    await pokeStore.loadPokemonFromAPIByName(name);
    const actualPokemon = await pokeStore.getPokemon();
    const pokemonStats = document.getElementById('pokemon__detail__info__stats');
    const pokemonDetail = document.getElementById('pokemon__detail__info');
    const pokemonTitle = document.getElementById('pokemon-detail-title')
    pokemonTitle.innerHTML = name;
    for (property in actualPokemon) {
        if (typeof actualPokemon[property] !== 'object' && property !== 'name' && property !== 'is_default' && property !== 'order') {
            let element = document.createElement('div');
            element.innerHTML = `<div class="pokemon-detail__info__block">
                    <span class="pokemon-detail__info__block__property-name" id="pokemon-detail-${property}"></span>
                    <span class="pokemon-detail__info__block__property-value" id="pokemon-detail-${actualPokemon[property]}"></span>
                </div>
                `;
            pokemonStats.appendChild(element);
            document.getElementById(`pokemon-detail-${property}`).innerHTML = property;
            document.getElementById(`pokemon-detail-${actualPokemon[property]}`).innerHTML = actualPokemon[property];
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