const urlParamName = require('./getUrlParam');

describe('Get Pokemon name from URL', () => {
	test('Should return the pokemon name, form the URL', () => {
		//arrange
		const query = { search: '?pokemonName=wobbuffet&pokeId=1' };
		//act
		const response = urlParamName(query);
		//assert
		expect(response).toBe('wobbuffet');
	});
});
