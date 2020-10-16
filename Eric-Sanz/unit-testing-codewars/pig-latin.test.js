const pigIt = require('./pig-latin');

describe ('pigIt', () => {

    test('should return the string letter of every word at the end of the word and add "ay" at the end', () => {
        let str = 'Pig latin is cool';
        expect(pigIt(str)).toEqual('igPay atinlay siay oolcay');
    });

    test ('if the last word is an ? or !, should return the same word', () => {
        str = 'Pig latin is cool ?';
        expect(pigIt(str)).toEqual('igPay atinlay siay oolcay ?');
    });
});
