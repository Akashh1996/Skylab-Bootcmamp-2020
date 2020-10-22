const Store = require('./store');
let name;
let element;
let pokemonList;
let circle;
let store;
let pokemon;

describe('Pokemon', () => {
    beforeEach(() => {
        pokemon = {name: 'testName'};
        store = new Store();
        element = document.createElement('div');
        pokemonList = [
            {test: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}},
            {test: {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}},
            {test: {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"}},
            {test: {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}}
        ];
        circle = document.createElement('circle');
        circle.setAttribute('r', 37);
    });

    test('should be defined', () => {
        expect(store).toBeDefined();
    });

    test('getPokemonList should return an array', () => {
        expect(store.getPokemonList()).toEqual([]);
    });

    test('getPokemon should return undefined', () => {
        expect(store.getPokemon()).toEqual(undefined);
    });

	describe('getPokemonList', () => {
		beforeEach(() => {
			global.fetch = jest.fn().mockImplementationOnce(() =>
				Promise.resolve({
					json: jest.fn().mockReturnValueOnce(pokemonList)
				})
			);
		});

		test('should return an array of objects', () => {
			return store.loadPokedex().then(() => {
				expect(store.getPokemonList()).toEqual([
                    {test: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}},
                    {test: {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}},
                    {test: {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"}},
                    {test: {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}}
                ]);
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

		test('should return ab object with a weight property', () => {
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

    describe('getElementFromSearch', () => {
        test('should return "bulbasaur" from search "?name=bulbasaur" with name', () => {
            //arrange
            const search = '?name=bulbasaur';
            //act
            //arrange
            expect(store.getElementFromSearch(search, 'name')).toBe('bulbasaur');
        })

        test('should return "1" from search "?id=1&name=bulbasaur" with id' , () => {
            //arrange
            const search = '?id=1&name=bulbasaur';
            //act
            //arrange
            expect(store.getElementFromSearch(search, 'id')).toBe('1');
        })

        test('should return "bulbasaur" from search "?id=1&name=bulbasaur&weight=69" with name', () => {
            //arrange
            const search = '?id=1&name=bulbasaur&weight=69';
            //act
            //arrange
            expect(store.getElementFromSearch(search, 'name')).toBe('bulbasaur');
        })

        test('should return "69" from search "?id=1&name=bulbasaur&weight=69" with weight', () => {
            //arrange
            const search = '?id=1&name=bulbasaur&weight=69';
            //act
            //arrange
            expect(store.getElementFromSearch(search, 'weight')).toBe('69');
        })
    });

    describe('createGroupElement', () => {
        test('should append an element in the parent element', () => {
            //arrange
            //act
            store.createGroupElement(element, pokemon, pokemonList, 'test', 2);
            //assert          
            expect(element.hasChildNodes()).toBe(true);
        });
        
        test('the list element has to have an element', () => {
            //arrange
            //act
            store.createGroupElement(element, pokemon, pokemonList, 'test', 2);
            //assert          
            expect(element.firstChild.hasChildNodes()).toBe(true);
        });
    });

    describe('setstrokeDashoffsetInCircle', () => {
        test('should assign dashoffset of aprox 144.136 to a circle with radius 37 and percent 38', () => {
            //arrange          
            //act
            store.setStrokeDashoffsetInCircle(circle, 38, 200);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(188.307);
        });
        
        test('should assign dashoffset of 0 to a circle if property value >200', () => {
            //arrange          
            //act
            store.setStrokeDashoffsetInCircle(circle, 210, 200);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBe(0);
        });
        
        test('should assign dashoffset of almost equal than circumference to a circle if percent <0', () => {
            //arrange
            const circumference = Math.PI * 2 * circle.getAttribute('r');
            //act
            store.setStrokeDashoffsetInCircle(circle, -10, 200);
            response = +circle.style.strokeDashoffset;
            //assert          
            expect(response).toBeCloseTo(circumference);
        });
    });

    describe('setStrokeDasharrayInCircle', () => {
        test('should assign dasharray of almost equal than circumference of the circle', () => {
            //arrange
            const circumference = Math.PI * 2 * circle.getAttribute('r');
            //act
            store.setStrokeDasharrayInCircle(circle, 38, 200);
            response = +circle.style.strokeDasharray;
            //assert          
            expect(response).toBeCloseTo(circumference);
        });
    });

    describe('updateValueHtml', () => {
        test('should change innerHTML from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'innerHTML', 'hola');
            //assert          
            expect(element.innerHTML).toBe('hola');
        });

        test('should change value from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'value', 20);
            //assert          
            expect(element.value).toBe(20);
        });

        test('should change max from an element', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'max', 80);
            //assert          
            expect(element.max).toBe(80);
        });

        test('should assign "-" if value is null', () => {
            //arrange
            //act
            store.updateValueHtml(element, 'max', null);
            //assert          
            expect(element.max).toBe('-');
        });
    });

    describe('getPokemonAbility', () => {
        test('should return the object ability of a pokemon', () => {
            //arrange
            store.setPokemonAbility({effect_entries: []})
            //act
            //assert          
            expect(store.getPokemonAbility()).toEqual({effect_entries: []});
        });
    });

    describe('getPokemonAbility', () => {
		beforeEach(() => {
            json = jest.fn().mockReturnValueOnce({effect_changes: {}, effect_entries: {}})
            global.fetch = jest.fn().mockImplementationOnce(response => {
                return Promise.resolve({json});
            })
        });
        test('should return an object of objects', () => {
            return store.loadPokemonAbilityByName('overgrow').then(() => {
                expect(store.getPokemonAbility()).toEqual({effect_changes: {}, effect_entries: {}});
            })
        });
    });

    describe('getDescriptionAbilityByLanguage', () => {
        test('should return the test in english', () => {
            //arrange
            store.setPokemonAbility({effect_entries: [
                {effect: 'Deutch test', language: {name: 'de'}},
                {effect: 'English test', language: {name: 'en'}}
            ]});
            //act
            const response = store.getDescriptionAbilityByLanguage('en');
            //assert
            expect(response).toBe('English test');
        });

        test('should return undefined if no ability', () => {
            //arrange
            store.setPokemonAbility(undefined);
            //act
            const response = store.getDescriptionAbilityByLanguage('en');
            //assert
            expect(response).toBe(undefined);
        });
    })
})