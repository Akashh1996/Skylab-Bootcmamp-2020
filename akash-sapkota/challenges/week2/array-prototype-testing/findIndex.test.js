const skylabArray = require('./index');

describe('Array methpd findIndex', () => {

    test('Should return index 2', () => {
        let customArray = {
            __proto__: skylabArray,
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            length: 4
        }

        let response = customArray.findIndex(customArray, (value) => {
            return value > 2
        })

        //expect
        expect(response).toEqual({
            index: "2",
            length: 1
        });
    });

});