const { TestScheduler } = require('jest');
const pigIt = require('./pig-it');

describe('Pig it', () => {
    test('Should return "igPay atinlay siay oolcay"', () => {
        //assign
        const str = 'Pig latin is cool';
        //add
        const response = pigIt(str);
        //assert
        expect(response).toBe('igPay atinlay siay oolcay');
    })
    
    test('Should return "hisTay siay ymay tringsay"', () => {
        //assign
        const str = 'This is my string';
        //add
        const response = pigIt(str);
        //assert
        expect(response).toBe('hisTay siay ymay tringsay');
    })
    
    test('Should return "elloHay , owhay reaay ouyay ?"', () => {
        //assign
        const str = 'Hello , how are you ?';
        //add
        const response = pigIt(str);
        //assert
        expect(response).toBe('elloHay , owhay reaay ouyay ?');
    })
});