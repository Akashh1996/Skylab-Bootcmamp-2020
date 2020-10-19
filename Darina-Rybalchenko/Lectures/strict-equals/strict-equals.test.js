const { describe } = require('yargs');
const strictEquals = require('./strict-equals')


test('compare 1 and return true', () => {
    expect(strictEquals(1, 1)).toBe(true)
});

test('compare NaN and return false', () => {
    expect(strictEquals(NaN, NaN)).toBe(false)
});
test('compare 0 and -0 return true', () => {
    expect(strictEquals(0, -0)).toBe(true)
});
test('compare -0 and 0 return true', () => {
    expect(strictEquals(-0, 0)).toBe(true)
});
test('compare 1 and 1 in string return false', () => {
    expect(strictEquals(1, '1')).toBe(false)
});

test('compare true and false return false', () => {
    expect(strictEquals(true, false)).toBe(false)
});

test('compare false and false return false', () => {
    expect(strictEquals(false, false)).toBe(true)
});

test('compare string water and string oil return', () => {
    expect(strictEquals('Water', 'oil')).toBe(false)
});