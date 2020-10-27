const SkylabArray =  {
    push: (original, element) => {
       return {
          ...original,
          [original.length] : element,
           length: original.length + 1,
           __proto__: SkylabArray
       };
    },
    filter: (callback, original) => {
        newObject = {}
        for (property in original) {
           if(callback(original[property]) === true) {
               newObject[property] = original[property]
           }
        }
        return {
         newObject

        };
    },

    map: () => {
    }
}

const customArray = {
    1: 1,
    2: 2,
    3: 3,
    4: 30,
    5: 6,
    length: 0,
    __proto__: SkylabArray,
}
const isMoreThanFive = number => number > 5;

const filteredArray = customArray.filter(isMoreThanFive, customArray)
console.log(filteredArray);

customArray = customArray.push(customArray, 'skylab');

module.exports = {SkylabArray, customArray}