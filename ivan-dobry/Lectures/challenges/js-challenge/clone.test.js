const cloneObj = require('./clone');

const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };

const can2 = cloneObj(can1);

describe('clone', () => {
    test('Have the same propeties', () => {
        expect(cloneObj(can1)).toEqual(can2);
    })
    test('are not the exact same obj', () => {
        expect(can1).not.toBe(can2);
    });
})

describe ('deepClone', () => {
    const original = {} 

    const copy = deepClone(original);

    expect(copy).toEqual(original);
})