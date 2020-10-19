const disemvowel = require('./disemvowels-trolls')

describe('Trolls testing', () => {
    test('should erase vowels', () => {
        expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
    })
});

