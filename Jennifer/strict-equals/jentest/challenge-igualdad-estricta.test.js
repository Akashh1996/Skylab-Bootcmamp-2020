const strictEquals = require('./challenge-igualdad-estricta')

describe('a y b no sean iguales', () => {
    test("A y B sean iguales", () => {
        const a = 1;
        const b = 1;
        const response = strictEquals(a, b);
        expect(response).toBe(true);
    })

    test("A y B no sean iguales", () => {
        const a = NaN;
        const b = NaN;
        const response = strictEquals(a, b);
        expect(response).toBe(false);
    })

    test("A y B sean iguales", () => {
        const a = 0;
        const b = -0;
        const response = strictEquals(a, b);
        expect(response).toBe(true);
    })

    test("A y B sean iguales", () => {
        const a = -0;
        const b = 0;
        const response = strictEquals(a, b);
        expect(response).toBe(true);
    })

    test("number y string no sean iguales", () => {
        const a = 1;
        const b = "1";
        const response = strictEquals(a, b);
        expect(response).toBe(false);
    })

    test("true y false sean diferentes", () => {
        const a = true;
        const b = false;
        const response = strictEquals(a, b);
        expect(response).toBe(false);
    })

    test("true y false sean diferentes", () => {
        const a = false;
        const b = true;
        const response = strictEquals(a, b);
        expect(response).toBe(false);
    })

    test("dos strings con valor diferentes devuelvan false", () => {
        const a = "water";
        const b = "oil";
        const response = strictEquals(a, b);
        expect(response).toBe(false);
    })

});
