const DetailPokemon = require('./detail');
const store = require('../store');

describe('details', () => {
	let detailComponent;
	const pokemon = { name: 'Charizard', id: 6 };

	beforeEach(() => {
		detailComponent = new DetailPokemon(pokemon);
	});

	test('should create', () => {
		expect(detailComponent).toBeDefined();
	});

	test('should contain Narco details', () => {
		expect(detailComponent.pokemon).toEqual({ name: 'Charizard', id: 6 });
	});

	test('should call updateHtmlValue', () => {
		// arrange
		const element = {};
		const property = 'value';
		const value = 'Charizard';

		// act
		detailComponent.updateHtmlValue(element, property, value);

		// assert
		expect(element.value).toEqual('Charizard');
	});
});
