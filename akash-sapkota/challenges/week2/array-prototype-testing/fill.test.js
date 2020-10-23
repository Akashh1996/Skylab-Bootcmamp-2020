const skylabArray = require('./index');

describe('Array methpd fill', () => {

    test('Should return values with new values filled', () => {
        let customArray = {
            __proto__: skylabArray,
            0: "apple",
            1: "banana",
            2: "grapes",
            3: "cherry",
            length: 4
        }

        let response = customArray.fill(customArray, "sklb", 2, 6)


        //expect
        expect(response).toEqual({
            0: "apple",
            1: "banana",
            2: "sklb",
            3: "sklb",
            length: 4,
            __proto__: Object
        });
    });

});