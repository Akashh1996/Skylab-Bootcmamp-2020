const { debug } = require('console');
const strictEquals = require('./strict-equals');

describe('Strict equals', () => {
    test('1 and 1 to be true', () => {
        //arrange
        const a = 1;
        const b = 1;

        //act

        const response = strictEquals(a, b);

        //assert
        expect(response).toBe(true);
    });

    test('NaN and NaN to be false', () => {
        expect(strictEquals(NaN, NaN)).toBe(false);
    });

    test('0 and -0 to be true', () => {
        expect(strictEquals(0, -0)).toBe(true);
        debugger;
    });

    test('-0 and 0 to be true', () => {
        expect(strictEquals(-0, 0)).toBe(true);
    });

    test('1 and "1" to be false', () => {
        expect(strictEquals(1, '1')).toBe(false);
    });

    test('true and false to be false', () => {
        expect(strictEquals(true, false)).toBe(false);
    });

    test('false and false to be true', () => {
        expect(strictEquals(false, false)).toBe(true);
    });

    test('"water" and "oil" to be false', () => {
        expect(strictEquals('water', 'oil')).toBe(false);
    });
});