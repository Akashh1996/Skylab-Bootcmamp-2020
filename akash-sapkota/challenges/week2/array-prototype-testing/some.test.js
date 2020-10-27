const skylabArray = require('./index');

describe('Array method some', () => {

    test('Should return true', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        }

        let response = customArray.some(customArray, (value) => {
            return value > 2
        })

        //expect
        expect(response).toBe(true)
    });
    test('Should return true', () => {
        let customArray = {
            __proto__: skylabArray,
            0: "apple",
            1: "banana",
            2: "grapes",
            3: "cherry",
            length: 4
        }

        let response = customArray.some(customArray, (value) => {
            return value.length > 5
        })

        //expect
        expect(response).toBe(true)
    });
    test('Should return false since the value returned wont safisty the condition ', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        }

        let response = customArray.some(customArray, (value) => {
            return value < 0
        })
        //expect
        expect(response).toBe(false)
    });

});