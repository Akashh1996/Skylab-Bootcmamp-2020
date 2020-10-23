const methodsArray = {
    map: (original, callback) => {
        let newObjMap = {};
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                newObjMap[property] = callback(original[property])
            }
        }
        newObjMap.length = original.length;
        return newObjMap;
    },

    filter: (original, callback) => {
        let newObjFilter = {};
        let newLength = 0;
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(callback(original[property])) {

                    newObjFilter[property] = original[property];
                    newLength++;
                }
                
            }
        }

        newObjFilter.length = newLength;
        return newObjFilter;
    },

    find: (original, callback) => {
        let newObjFind = {};
        let newLength = 0;
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(callback(original[property])) {

                    newObjFind[property] = original[property];
                    newLength++;
                    break;
                }
                
            }
        }

        newObjFind.length = newLength;
        return newObjFind;
    },

    findIndex: (original, callback) => {
        let newObjFindIndex = {};
        let newLength = 0;
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(callback(original[property])) {

                    newObjFindIndex[property] = property;
                    newLength++;
                    break;
                }
                
            }
        }

        newObjFindIndex.length = newLength;
        return newObjFindIndex;
    },

    fill: (original, value, start, end) => {
        let newObjFill = {...original};
        
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(property >= start && property < end ) {

                    
                    newObjFill[property] = value;
                }
                 
                
            }
        }

        
        return newObjFill;
    },

    some: (original, callback) => {
        let some = false;
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(callback(original[property])) {
                    some = true;
                }
            }
        }
        
        return some;
    },

    every: (original, callback) => {
        let every = false;
        for (let property in original ) {
            if(original.hasOwnProperty(property) && property !== 'length') {

                if(callback(original[property])) {
                    every = true;
                }else {
                    every =false;
                    return every
                }
            }
        }
        
        return every;
    },
    
    //copywithin-reduce
    

    


};


let obj = { 

    0: 1,
    1: 2,
    2: 3,
    3: 2,
    length: 4,
    __proto__: methodsArray
};


module.exports = {methodsArray, obj} 


