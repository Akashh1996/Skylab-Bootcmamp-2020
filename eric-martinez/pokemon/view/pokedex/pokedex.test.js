const PokedexComponent = require('./pokedex');

describe('heroes', () => {
	let pokemonComponent;
	const pokemon = [{name: 'Bulbasaur' }];

	beforeEach(() => {
		pokemonComponent = new PokedexComponent(pokemon);
	});

	test('should create', () => {
		expect(pokemonComponent).toBeDefined();
	});

	test('should call updateHtmlPokemonList', () => {
		const element = {};
		const markup = `
<li>
<a href="../details/details.html?pokemonName=Bulbasaur">
<span id="pokemons">Bulbasaur</span>
</a>
</li>
`;

pokemonComponent.updateHtmlPokemonList(element);

		expect(element.innerHTML).toBe(markup);
	});
});