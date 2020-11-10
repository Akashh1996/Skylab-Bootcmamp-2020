function wichPokemon() {
    const actualLocation = location.search;
    const pureLocation = actualLocation.slice(0, 1);
    const separatedLocation = pureLocation.split('=');
    let pokemon = separatedLocation[1];
    pokeStore.loadPokemonFromAPIByName(pokemon).then(() => printAbility());
}


function firstsPokemons() {
    const dashBoard = document.getElementById('dashboard-pokemon');
    let pokemons;
    pokeStore.loadPokemonsFromAPI().then(() => {
        pokemons = pokeStore.getPokemons();
        for (let index = 0; index < 4; index++) {
            let element = document.createElement('div');
            element.innerHTML = `<div class="topPokemon-block" id="${pokemons[index].name}">${pokemons[index].name}</div>`;
            block.appendChild(element);
            element.addEventListener('click', () => {
                window.location = `http://127.0.0.1:5500/ivan-san-nicolas/challenges/pokemon/habilidad.html?pokemon=${pokemons[index].name}`;
            })
        }
    })
}

firstsPokemons();
