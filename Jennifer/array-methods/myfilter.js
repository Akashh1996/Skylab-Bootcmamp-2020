const mySkylabMethods = {
  myFilter: (object, callback) => {
    const returnObject = {};
    let contador = 0;
    for (const property in object) {
        const elementPassTest = callback(object[property]);
        if(elementPassTest){
            contador++
            returnObject[property]=object[property]
        }
    }
    if(contador === 0 ){
            return undefined;
    }else{
            //returnObject.length = contador;
            return returnObject;
    }  
}  
}

 const skylabArray = {
    0: 5,
    1: 10,
    2: 3,
    length: 3,
    __proto__: mySkylabMethods
};
 
 let result = skylabArray.myFilter(skylabArray, (property) => {
    if(property > 3){
        return true;
    }else{
        return false;
    }
});


// Object.prototype.myFilter = myFilter;

console.log(result);