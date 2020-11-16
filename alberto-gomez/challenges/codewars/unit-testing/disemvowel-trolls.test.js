const disemVowel = require ('./disemvowel-trolls');

describe ('disemVowel', () => {
    test('should show  << Ths wbst s fr lsrs LL! >> for a string <<This website is for losers LOL!>>', () => {
        //arrange
        const originalString = 'This website is for losers LOL!';
        const finalString = 'Ths wbst s fr lsrs LL!';
        //act
        const withoutVowels = disemVowel(originalString);
        //assert
        expect(withoutVowels).toBe(finalString);
    })

})
