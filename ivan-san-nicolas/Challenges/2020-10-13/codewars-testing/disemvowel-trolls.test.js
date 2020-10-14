const disemvowel = require('./disemvowel-trolls.js');

describe('disemvowel', () => {
    test('should return string -> "Ths wbst s fr lsrs LL!"', () => {
        // arrange
        let str = "This website is for losers LOL!"
        // act
        let newStr = disemvowel(str);
        // assert
        expect(newStr).toBe("This website is for losers LOL!");
    });
});