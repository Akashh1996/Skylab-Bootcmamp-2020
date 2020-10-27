const disemvowel = require('./disemvowel-trolls.js');

describe('disemvowel', () => {
    test('should return string -> "Ths wbst s fr lsrs LL!"', () => {
        let str = "This website is for losers LOL!"
        let newStr = disemvowel(str);
        expect(newStr).toBe("This website is for losers LOL!");
    });
});