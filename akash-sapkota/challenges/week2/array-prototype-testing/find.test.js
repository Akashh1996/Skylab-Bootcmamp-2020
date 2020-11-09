const skylabArray = require('./index');

describe('Array methpd find', () => {

    test('Should return 3 and 1 as length', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        }

        let response = customArray.find(customArray, (value) => {
            return value > 2
        })

        //expect
        expect(response).toEqual({
            2: 3,
            length: 1
        });
    });
    test('Should return banana 1 as length', () => {
        let customArray = {
            __proto__: skylabArray,
            0: "apple",
            1: "banana",
            2: "grapes",
            3: "cherry",
            length: 4
        }

        let response = customArray.find(customArray, (value) => {
            return value.length > 5
        })

        //expect
        expect(response).toEqual({

            __proto__: skylabArray,
            1: "banana",
            length: 1
        });
    });

});