const { expect } = require('@jest/globals');
const DetailComponent = require('./detail');

describe('details', () => {
	let detailComponent;
	const hero = { name: 'Narco', id: 12 };

	beforeEach(() => {
		detailComponent = new DetailComponent(hero);
	});

	xtest('should create', () => {
		expect(detailComponent).toBeDefined();
	});

	xtest('should contain Narco details', () => {
		expect(detailComponent.hero).toEqual({ name: 'Narco', id: 12 });
	});

	xtest('should call updateHtmlValue', () => {
		// arrange
		const element = {};
		const property = 'value';
		const value = 'A-Bomb';

		// act
		detailComponent.updateHtmlValue(element, property, value);

		// assert
		expect(element.value).toEqual('Narco');
	});
	test('should create button if hero hasOwnProperty From Array', () => {
		//arrange
		const heroProperties = [
			'appearance',
			'biography',
			'work',
			'connections',
			'relatives'
		];
		//act
		const response = detailComponent.createProfileHeroPropsBtn(heroProperties);
		//assert
		expect(response).toEqual([
			'appearance',
			'biography',
			'work',
			'connections',
			'relatives'
		]);
	});
});
