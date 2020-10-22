function firstsPokemons() {
    const dashboard = document.getElementById('dashboard-pokemon');
    let pokemons;
    pokeStore.loadPokemonsFromAPI().then(() => {
        pokemons = pokeStore.getPokemons();
        console.log(pokemons);
        for (let index = 0; index < 4; index++) {
            let element = document.createElement('div');
            element.innerHTML = `<div class="topPokemon-block" id="${pokemons[index].name}">${pokemons[index].name}</div>`;
            dashboard.appendChild(element);
            element.addEventListener('click', () => {
                window.location = `http://127.0.0.1:5500/ivan-san-nicolas/challenges/pokemon/habilidad.html?pokemon=${pokemons[index].name}`;
            })
        }
    })
}

firstsPokemons();