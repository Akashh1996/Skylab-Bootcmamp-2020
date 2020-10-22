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

    filter: (original, object) => {
        let newObject = {};
        newObject.length = 0;
        for (let property in object) {
            if (original(object[property]) && property !== 'length' && object.hasOwnProperty(property)) {
                newObject[property] = object[property];
                newObject.length++;
            };
        };
        return newObject;
    },

    some: (fn, object) => {
		for (let property in object) {
			if (fn(object[property]) && object.hasOwnProperty(property)) {
				return true;
			}
		}
		return false;
    },
    
    findIndex: (original, element) => {
        let objArray = Object.values(original);
        for (let i = 0; i < objArray.length; i++) {
            if (element(objArray[i])) {
                return i;   
            };
            return false
        };
    },

    every: (original, element) => {
        let objArray = Object.values(original);
        for (let i = 0; i < objArray.length - 1; i++) {
            if (!element(objArray[i])) return false;
        }
        return true;
    },

    map: (object,callback) => {
        const newObject = {};
        Object.entries(object).forEach((element) => {
            newObject[element[0]] = callback(element[1]);
        });
        
        return newObject;
    };
    
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