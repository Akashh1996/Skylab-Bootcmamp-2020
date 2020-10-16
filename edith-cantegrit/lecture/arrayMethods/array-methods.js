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
        newObject.id
        for (property in original) {
           if(callback(original[property]))
        }
        return {
         newObject =

        }
    }
    
    map: () => {
        console.log('push method underconstruction');
    }
}

const customArray = {
    length: 0,
    __proto__: SkylabArray,
}
const isMoreThanFive = number => number > 5;

customArray = customArray.push(customArray, 'skylab');
customArray = customArray.filter(isMoreThanFive, customArray)

module.exports = {SkylabArray, customArray}