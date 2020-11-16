const strictEquals = require ('./strict-equals');

describe ('Strict Equals', () => {
    test('should compare 1 and return true', () => {
        //arrange
        const a = 1;
        const b = 1;

        //act
        const response = strictEquals(a, b);

        //assert

        expect(response).toBe(true);
    })

    test('should compare NaN and return false', () => {
        //arrange
        const a = NaN;
        const b = NaN;

        //act
        const response = strictEquals(a, b);

        //assert

        expect(response).toBe(false);
    })

    test('should compare 0 and -0 and return true', () => {
        //arrange
        const a = 0;
        const b = -0;

        //act
        const response = strictEquals(a, b);

        //assert

        expect(response).toBe(true);
    })

    test('should compare -0 and 0 and return true', () => {
        //arrange
        const a = -0;
        const b = 0;

        //act
        const response = strictEquals(a, b);

        //assert

        expect(response).toBe(true);
    })
// SHORT SYNTAX
    test('should compare 1 and \'1\' and return false', () => {
        expect(strictEquals(1, '1')).toBe(false);
    })

    test('should compare true and false and return false', () => {
        expect(strictEquals(true, false)).toBe(false);
    })

    test('should compare false and false and return true', () => {
        expect(strictEquals(false, false)).toBe(true);
    })

    test('should compare \'Water\' and \'oil\' and return false', () => {
        expect(strictEquals('Water', 'oil')).toBe(false);
    })
}) 