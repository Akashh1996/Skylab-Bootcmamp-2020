const myFindIndex = require('./challenge-igualdad-estricta')


const mySkylabMethod = {
    myFindIndex: (object, callback) => {

        for (const property in object) {
            const elementPassTest = callback(object[property]);
            if(elementPassTest){
                return property;
            }
        }
        return undefined
    }
}

const skylabArray = {
    0: 5,
    1: 10,
    2: 3,
    length: 3,
    __proto__: mySkylabMethod
};


result = skylabArray.myFindIndex(skylabArray, (property) => {
    if(property === 3){
        return true;
    }else{
        return false;
    }
});

console.log(result);


