const { describe } = require('yargs')
const skyLabArray = require('./script.refactor')

describe
test('Should return object values multiplied by 2', () => {
    let obj = {
        0: 1,
        1: 4,
        2: 6,
        length: 3,
        __proto__: skyLabArray
    }

    let resultMap = obj.map(obj, (value) => {
        return value * 2
    })

    expect(resultMap).toEqual({
        0: 2,
        1: 8,
        2: 12,
        length: 3,
        __proto__: skyLabArray
    }
    )
}
)