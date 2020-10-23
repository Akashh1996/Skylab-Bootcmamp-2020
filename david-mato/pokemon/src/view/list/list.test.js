const ListComponent = require('./list');
 describe('list', () => {
     let listComponent;
     const pokemons = [{ name: 'Bulbasaur' },
     { name: 'Pikachu' }];

     beforeEach(() => {
        listComponent = new ListComponent(pokemons);
     })

     test('should be defined', () => {
        expect(listComponent).toBeDefined()
     })

     test('should be defined', () => {
        expect(listComponent.pokemons).toEqual(pokemons)
     })

     test('should call updateHtmlPokemonList', () => {
        const element = {};
		const markup = `<a class="pokemon-btn" href="../detail/detail.html?pokeId=Bulbasaur">Bulbasaur</a><a class=\"pokemon-btn\" href=\"../detail/detail.html?pokeId=Pikachu\">Pikachu</a>`;

		listComponent.updateHtmlPokemonList(element);

		expect(element.innerHTML).toBe(markup);
	});
 })