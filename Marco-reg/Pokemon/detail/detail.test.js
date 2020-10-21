const DetailComponent = require('./detail');
const store = require('../../store');

describe('details', () => {
	let detailComponent;
	const pokemon = { name: '', id: 12 };

	beforeEach(() => {
		detailComponent = new DetailComponent(pokemon);
	});

	test('should create', () => {
		expect(detailComponent).toBeDefined();
	});

	test('should contain Narco details', () => {
		expect(detailComponent.pokemon).toEqual({ name: 'Narco', id: 12 });
	});

	test('should call updateHtmlValue', () => {
		// arrange
		const element = {};
		const property = 'value';
		const value = 'Ditto';

		// act
		detailComponent.updateHtmlValue(element, property, value);

		// assert
		expect(element.value).toEqual('Ditto');
	});
});
