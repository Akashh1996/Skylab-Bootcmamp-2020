class PokemonComponent {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    updatePokemonList(element) {
        let x = 1
        element.innerHTML = '';
        this.pokemon.forEach((eachPokeMon) => {
            element.innerHTML =
                element.innerHTML +
                `
<li>

<a href="../detail/detail.html?pokemonName=${x}">
<span>${x}.</span> <span> ${eachPokeMon.name}</span>

</a>

</li>
`;
            x++
        });
    }

}

/* module.exports = PokemonComponent; */