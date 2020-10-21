store.loadPokemons().then(() => {
    console.log(_pokemons);
    _pokemons.forEach((pokemon) => {
        let pokeLink = pokemon.url
        let btn = document.createElement('button');
        let anchorbtn = document.createElement('a')
        anchorbtn.textContent = pokemon.name;
        anchorbtn.setAttribute('href', pokeLink);
        document.body.appendChild(btn);
        btn.appendChild(anchorbtn);
    })
})