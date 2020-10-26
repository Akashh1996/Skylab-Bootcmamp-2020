const skylabArray = require('./index');

describe('Array method map', () => {

    test('Should return object values multiplied by 2', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        }

        let response = customArray.map(customArray, (value) => {
            return value * 2
        })

        //expect
        expect(response).toEqual({

            __proto__: skylabArray,
            0: 2,
            1: 4,
            2: 6,
            3: 8,
            length: 4
        });
    });
    test('Should return object values aadding mundo in each of them', () => {
        let customArray = {
            __proto__: skylabArray,
            0: "hola",
            1: "hola",
            2: "hola",
            3: "hola",
            length: 4
        }

        let response = customArray.map(customArray, (value) => {
            return `${value} mundo`
        })

        //expect
        expect(response).toEqual({

            __proto__: skylabArray,
            0: "hola mundo",
            1: "hola mundo",
            2: "hola mundo",
            3: "hola mundo",
            length: 4
        });
    });

});