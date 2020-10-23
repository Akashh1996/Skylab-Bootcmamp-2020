const skylabArray = require('./index');

describe('Array method every', () => {

    test('Should return true', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 2,
            1: 2,
            2: 2,
            3: 2,
            length: 4
        }

        let response = customArray.every(customArray, (value) => {
            return value === 2
        })

        //expect
        expect(response).toBe(true)
    });

    test('Should return true', () => {
        let customArray = {
            __proto__: skylabArray,
            0: "hola",
            1: "hola",
            2: "hola",
            3: "hola",
            length: 4
        }

        let response = customArray.every(customArray, (value) => {
            return value === "hola"
        })

        //expect
        expect(response).toEqual(true);
    });

    test('Should return false', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 8,
            2: 9,
            3: 11,
            length: 4
        }

        let response = customArray.every(customArray, (value) => {
            return value === 1
        })

        //expect
        expect(response).toBe(false)
    });



});