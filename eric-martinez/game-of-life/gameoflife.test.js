const generate = require('./gameoflife.js');
const array = require('./gameoflife.js');

describe ('generate', () => {
    test('should return the correct number of neighbors', () => {
        let input = [
            [0, 0, 0, 0, 0], 
            [0, 1, 1, 1, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0]
        ];
        const response = generate(input);
        expect(response).toEqual([
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 1, 0, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0]
        ]);
    });
});