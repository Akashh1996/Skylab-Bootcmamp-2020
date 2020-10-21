const store = require('./store');
let name;
let element;
let pokemonList;

describe('Pokemon', () => {
    beforeEach(() => {
        element = document.createElement('div');
        pokemonList = [
            {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"},
            {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
            {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
            {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}
        ]
    });

	describe('getPokemonList', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce([{ id: 12, name: 'Narco' }])
				})
			);
		});

		test('should update _heroes', () => {
			return store.loadPokedex().then(() => {
				expect(store.getPokemonList()).toEqual([{ id: 12, name: 'Narco' }]);
			});
		});
    });
    
	describe('getPokemon', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce({ weight: 69 })
				})
            );
            name = 'bulbasaur';
		});

		test('should update _heroes', () => {
			return store.loadPokemonByName(name).then(() => {
				expect(store.getPokemon().weight).toBe(69);
			});
		});
    });

    describe('createListElement', () => {
        test('should append an element in the parent element', () => {
            //arrange          
            //act
            store.createListElement(element, pokemonList, 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange          
            //act
            store.createListElement(element, pokemonList, 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });

    describe('getNamefromSearch', () => {
        test('should return "bulbasaur from search "?name=bulbasaur"', () => {
            //arrange
            const search = '?name=bulbasaur';
            //act
            //arrange
            expect(store.getNamefromSearch(search)).toBe('bulbasaur');
        })
    });
})