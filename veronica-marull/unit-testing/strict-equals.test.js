
const strictEquals = require('./strict-equals');

describe('strictEquals', () => {
    test('should compare 0 and -0 return true',() => {
        //arrange
        const a = 0;
        const b = -0;

        //act
        const response = strictEquality(a,b);



        //assert
        expect(response).toBe(true);
    })

    test('should compare NaN and return false ',() => {
        //arrange
        const a = NaN;
        const b = NaN;

        //act
        const response = strictEquality(a,b);



        //assert
        expect(response).toBe(true);
    })

})