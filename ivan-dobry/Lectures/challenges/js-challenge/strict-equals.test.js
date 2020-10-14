const strictEquals = require ('./stric-equals')

describe('equals', () => {
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(1, 1)).toBe(true);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(NaN, NaN)).toBe(false);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(0, -0)).toBe(true);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(-0, 0)).toBe(true);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(1, '1')).toBe(false);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(true, false)).toBe(false);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals(false, false)).toBe(true);
    })
    test('should be 1 strict equal to 1', () => {
        expect(strictEquals('water', 'oil')).toBe(false);
    })
})


describe('stricEquals', () => {
    test('should ', () => {
        //arrange
        const a = 1;
        const b = -1

        //act 
        const response = strictEquals(a, b);

        //assert
        expect(response.toBe(true));

    })
})