const detailComponent = require('./detail');

describe('Detail', () => {
	test('Should create element', () => {
		expect(detailComponent).toBeDefined();
	});
	test('should contain narco details', () => {
		expect(detailComponent.hero).toEqual({ name: 'Narco', id: 12 });
  });
	test('should return detailComponent.hero values', () => {
    const element = {}
    const property
    const value = detailComponent.hero.name

		expect(detailComponent.updateHTMLValues(
	nameElement,
	'value',
	detailComponent.hero.name
)).toEqual({ name: 'Narco'});
  });
});
