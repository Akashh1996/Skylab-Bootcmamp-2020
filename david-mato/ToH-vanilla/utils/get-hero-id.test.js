const getHeroId = require('./get-hero-id');

describe('getHeroId', () => {
	test('should return id value 12', () => {
		let location = { search: '?heroId=12' };

		const heroId = getHeroId(location);

		expect(heroId).toBe(12);
	});

	test('should return id value 12 when there are multiple query params', () => {
		let location = { search: '?heroId=12&heroName=Narco' };

		const heroId = getHeroId(location);

		expect(heroId).toBe(12);
	});
});