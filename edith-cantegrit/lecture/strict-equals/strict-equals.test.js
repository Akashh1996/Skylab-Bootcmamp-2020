const strictEquals= require('./strict-equals');

test('a and b are strictly equals', () => {
    const a = NaN;
    const b = NaN;

    const response = strictEquals(a, b);

    expect(response).toBe(false);
})

test('a and b are strictly equals', () => {
    const a = 0;
    const b = -0;

    const response = strictEquals(a, b);

    expect(response).toBe(true);
})

test('a and b are strictly equals', () => {
    const a = -0;
    const b = 0;

    const response = strictEquals(a, b);

    expect(response).toBe(true);
})

test('a and b are strictly equals', () => {
    const a = 1;
    const b = '1';

    const response = strictEquals(a, b);

    expect(response).toBe(false);
})

test('a and b are strictly equals', () => {
    const a = true;
    const b = false;

    const response = strictEquals(a, b);

    expect(response).toBe(false);
})

test('a and b are strictly equals', () => {
    const a = false;
    const b = false;

    const response = strictEquals(a, b);

    expect(response).toBe(true);
})

test('a and b are strictly equals', () => {
    const a = 'water'
    const b = 'oil';

    const response = strictEquals(a, b);

    expect(response).toBe(false);
})