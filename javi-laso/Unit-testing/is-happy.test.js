const isHappy = require('./is-happy');

describe('Is a happy number', () => {
    test('should return [1]', () => {
        //assign
            const n = 7;
            const pow = 2;
        //add
            const result = isHappy(n, pow);
        //assert
        expect(result).toStrictEqual([1]);
    })

    test('should return [42, 20, 4, 16, 37, 58, 89, 145, 42]', () => {
        //assign
            const n = 42;
            const pow = 2;
        //add
            const result = isHappy(n, pow);
        //assert
        expect(result).toStrictEqual([42, 20, 4, 16, 37, 58, 89, 145, 42]);
    })

    test('should return [58, 89, 145, 42, 20, 4, 16, 37, 58]', () => {
        //assign
            const n = 58;
            const pow = 2;
        //add
            const result = isHappy(n, pow);
        //assert
        expect(result).toStrictEqual([58, 89, 145, 42, 20, 4, 16, 37, 58]);
    })
});