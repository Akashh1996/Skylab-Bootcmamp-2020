const PokemonComponent = require('./index');

describe('pokemon', () => {
	let pokemonComponent;
	const pokemon = [{ id: 6, name: 'Charizard' }];

	beforeEach(() => {
		pokemonComponent = new PokemonComponent(pokemon);
	});

	test('should create', () => {
		expect(pokemonComponent).toBeDefined();
	});

	test('should call updateHtmlPokemonList', () => {
		const element = {};
		const markup = `
<li>
<a href="https://pokeapi.co/api/v2/pokemon/Charizard">
<span id="pokemon-name">Charizard</span>
</a>
</li>
`;

		pokemonComponent.updateHtmlPokemonList(element);

		expect(element.innerHTML).toBe(markup);
	});
});
