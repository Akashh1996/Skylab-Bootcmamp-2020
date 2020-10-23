const DetailComponent = require('./details');

describe('details', () => {
	let detailComponent;
	const pokemon = { name: 'Bulbasaur'};

	beforeEach(() => {
		detailComponent = new DetailComponent(pokemon);
	});

	test('should create', () => {
		expect(detailComponent).toBeDefined();
	});

	test('should contain Bulbasaur details', () => {
		expect(detailComponent.pokemon).toEqual({ name: 'Bulbasaur'});
	});

	test('should call updateHtmlValue', () => {
		// arrange
		const element = {};
		const property = 'value';
		const value = 'Bulbasaur';

		// act
		detailComponent.updateHtmlValue(element, property, value);

		// assert
		expect(element.value).toEqual('Bulbasaur');
	});
});