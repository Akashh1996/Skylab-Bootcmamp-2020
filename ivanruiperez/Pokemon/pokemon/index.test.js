const PokemonComponent = require('./index');

describe('pokemon', () => {
	let pokemonComponent;
	let pokemon = {
		id: 6,
		name: 'Charizard',
		results: [
			{ name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' }
		]
	};

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
<a href="https://pokeapi.co/api/v2/pokemon/charizard">
<span id="pokemon-name">charizard</span>
</a>
</li>
`;

		pokemonComponent.updateHtmlPokemonList(element);

		expect(element.innerHTML).toBe(markup);
	});
});
