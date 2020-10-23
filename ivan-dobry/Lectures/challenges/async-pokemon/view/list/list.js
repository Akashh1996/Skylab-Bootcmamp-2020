class PokemonComponent {
    constructor(pokemon) {
        this.pokemon = pokemon;
    }

    updatePokemonList(element) {
        let x = 1;
        element.innerHTML = '';
        this.pokemon.forEach((eachPokemon) => {
            element.innerHTML =
                element.innerHTML +
                `
                <div class="list-item">
				<div class="box-position">${x++}</div>
				<a
					class="name-position"
					href="../details/details.html?pokemonName=${eachPokemon.name}"
					>${eachPokemon.name}</a
				>
			</div>

                `;
        });
    }
}

module.exports = PokemonComponent;

                // <li>

                // <a href="../details/details.html?pokemonName=${eachPokemon.name}">
                // <span>${x++}</span> - <span> ${eachPokemon.name}</span>

                // </a>

                // </li>