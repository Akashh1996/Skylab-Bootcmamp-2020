
const comparePowers = require ('./compare-powers');

describe ('comparePowers...', () => {
    test('should compare pairs of base and exponent and find the greatest.', () => {
        //arrange
        const base1 = 2;
        const exp1 = 10;
        const base2 = 2;
        const exp2 = 15;
        const result = 1;
        //act
        const findGreat = comparePowers([base1, exp1],[base2, exp2]);
        //assert
        expect(findGreat).toBe(result)
    })

})