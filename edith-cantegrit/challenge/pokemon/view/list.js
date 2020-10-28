function printPoke() {
    let boxBtns = document.createElement('div')
    boxBtns.setAttribute("class","divBtns")
    pokeStore.getPokemons().results.forEach((pokemon) => {
        pokeStore.name = pokemon.name
        let pokeLink = `./detail.html?pokemon=${pokemon.name}`;
        let btn = document.createElement('button');
        btn.setAttribute("class","btnPokedex")
        let anchorbtn = document.createElement('a')
        anchorbtn.textContent = pokemon.name;
        anchorbtn.setAttribute("href", pokeLink);
        anchorbtn.setAttribute("class", "anchorStyle");
        boxBtns.appendChild(btn)
        btn.appendChild(anchorbtn);
    })
    document.body.appendChild(boxBtns);
}

pokeStore.loadPokemonsFromAPI().then(() => printPoke());
