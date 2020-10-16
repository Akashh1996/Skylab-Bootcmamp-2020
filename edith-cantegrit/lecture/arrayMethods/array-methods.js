const SkylabArray =  {
    push: (original, element) => {
       return {
          ...original,
          [original.length] : element,
           length: original.length + 1,
           __proto__: SkylabArray
       };
    },
    filter: () => {
        console.log('push method underconstruction');
    },
    map: () => {
        console.log('push method underconstruction');
    }
}

const customArray = {
    length: 0,
    __proto__: SkylabArray,
}

customArray = customArray.push(customArray, 'skylab');

module.exports = {SkylabArray, customArray}