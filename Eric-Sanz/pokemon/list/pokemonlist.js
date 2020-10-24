class PokemonListComponent {
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
                <div class="list-container">
				<div class="id-pokemon">${x++}</div>
				<a
					class="name-pokemon"
					href="../detail/pokemondetail.html?pokemonName=${eachPokemon.name}"
					>${eachPokemon.name}</a
				>
			</div>
                `;
        });
    }
}



// store.loadPokedex().then(()=> {
//     _pokedex.forEach((pokemon) => {
//         let btn = document.createElement('button');
//         btn.textContent = pokemon.name;
//         document.body.appendChild(btn);
//         btn.innerHTML =
//                 `
// <li>
//     <a href="=${pokemon.name}">
//         <span id="pokemons">${pokemon.name}</span>
//     </a>
// </li>
// `;
//     })
// });