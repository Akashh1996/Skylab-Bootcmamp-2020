const isHappy = require('./happy-numbers');

describe ('isHappy', () => {
    test('should return the odd number in the array', () => {
    });
});


Test.assertSimilar(isHappy(7, 2), [1]);
Test.assertSimilar(isHappy(42, 2), [42, 20, 4, 16, 37, 58, 89, 145, 42]);