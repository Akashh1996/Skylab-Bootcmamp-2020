const mySkylabMethod = {
    myFindIndex: (object, callback) => {
        debugger;
        let somedifferent = false;
        for (const property in object) {
            const elementPassTest = callback(object[property]);
            if(!elementPassTest){
                somedifferent = true;
                return false;
            }
        }
        if(somedifferent === false){
            return true;
        }
    }
}

const skylabArray = {
    0: 5,
    1: 7,
    2: 3,
    length: 3,
    __proto__: mySkylabMethod
};


result = skylabArray.myFindIndex(skylabArray, (property) => {
    if(property === 7){
        return true;
    }else{
        return false;
    }
});

console.log(result);