const mySkylabMethod = {
    myFind: (object, callback) => {
       for (const property in object) {
            const elementPassTest = callback(object[property]);
            if(elementPassTest){
                return object[property]
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


result = skylabArray.myFind(skylabArray, (property) => {
    if(property === 3){
        return true;
    }else{
        return false;
    }
});

console.log(result);


module.exports = mySkylabMethod
module.exports = this.myFind