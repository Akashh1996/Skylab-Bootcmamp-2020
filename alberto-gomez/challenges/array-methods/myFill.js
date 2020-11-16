//TODO

const skylabArr = {
    fill: (original, value, start, end) => {
        
        for (let i = start; i < end; i++) {
            if (original.hasOwnProperty(i)) {
                original[i] = value;
            }
        }
        return {
            ...original,
            __proto__: skylabArr
        }
    }
}

let customObj = {
    0: 'skylab',
    1: 'skylab',
    2: 'skylab',
    3: 'skylab',
    length: 4,
    __proto__: skylabArr
};

const result = customObj.fill(customObj, 'sklb', 2, 6);

console.log(result);

