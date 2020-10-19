const skylabArray = {
    push: (original, element) => {
        return {
            ...original,
            [original.length]: element,
            length: original.length + 1,
            __proto__: skylabArray
        };
    },

    find: (original, element) => {
        for (let property in original) {
			if (element(original[property]) && original.hasOwnProperty(property)) {
				return original[property];
			};
		};
    },

    filter: (original, element) => {
        let newObject = {};
        newObject.length = 0;
        for (let property in original) {
            if (original.hasOwnProperty(property) !== 'length') {
                if (element(original[property]) && original.hasOwnProperty(property)) {
                    newObject[property] = original[property];
                    newObject.length++;
                };
            };
        return newObject;
        };
    },
};

let filterArray = {
    0: 'music',
    1: 'sports',
    2: 'movies',
    3: 'categories',
    4: 'photography',
    length: 5,
    __proto__: skylabArray
};


const resultFilterArray = filterArray.filter(filterArray, (element => element.length > 7));
console.log(resultFilterArray);

const resultFilterArray = filterArray.filter(filterArray, (element => element.length > 7));
console.log(resultFilterArray);

const result = myFilter(obj, (value) => {
    return value==='Rojo';
});

let findArray = {
    0:2,
    1:4,
    2:12,
    3:40,
    4:120,
    length: 5,
    __proto__:skylabArray
};

const resultFindArray = findArray.find(findArray, (element => element > 15));


console.log(resultFindArray);

let customArray = {
    0: 'Skylab',
    length: 1,
    __proto__: skylabArray
};

customArray = customArray.push(customArray, 'Bootcamp');

console.log(customArray);

console.log(found);
// expected output: 12

module.exports = (customArray,skylabArray);