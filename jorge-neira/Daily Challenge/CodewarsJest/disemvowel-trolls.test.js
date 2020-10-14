import disemvowel from './disemvowel-trolls';

describe('disemvowels CodeWars', () => {
	test('take off all the vowels form a string', () => {
		expect(disemvowel('This website is for losers LOL!')).toBe(
			'Ths wbst s fr lsrs LL!'
		);
	});
});
