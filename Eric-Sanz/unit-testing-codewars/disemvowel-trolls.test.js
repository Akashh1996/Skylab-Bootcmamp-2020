const disemvowel = require('./disemvowel-trolls');

describe ('disemvowel', () => {

    test('should erase the vowels of the phrase', () => {
        let text = 'This website is for losers LOL!';
        disemvowel(text);
        expect(newText).toEqual('Ths wbst s fr lsrs LL!');
    });
});