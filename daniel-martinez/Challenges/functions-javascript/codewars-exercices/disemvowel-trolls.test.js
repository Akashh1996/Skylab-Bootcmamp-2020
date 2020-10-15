const disemvowel = require('./disemvowel-trolls');

describe('disemvowel-trolls', () => {
	test('codewars test', () => {
		//arange
		const values = 'This website is for losers LOL!';
		//act
		const response = disemvowel(values);
		//assert
		expect(response).toBe('Ths wbst s fr lsrs LL!');
	});
	test('codewars test', () => {
		//arange
		const values = 'What are you, communist?';
		//act
		const response = disemvowel(values);
		//assert
		expect(response).toBe('Wht r y, cmmnst?');
	});
});
