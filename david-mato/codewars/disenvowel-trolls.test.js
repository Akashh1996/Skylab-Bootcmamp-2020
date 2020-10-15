const disemvowel = require('./disenvowel-trolls');

describe('disemvowel', () => {
	test('should return Ths wbst s fr lsrs LL!', () => {
		// arrange
		const str = 'This website is for losers LOL!';
		// act
		const response = disemvowel(str);
		// assert
		expect(response).toBe('Ths wbst s fr lsrs LL!');
	});
});
