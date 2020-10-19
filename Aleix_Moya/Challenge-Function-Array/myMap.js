const skylabArray = {
    array: {
        1: 1,
        2: 2,
        3: 3
    },
    
    myMap : function callback(callbackFunction) {
        const returnObject = {};
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            returnObject[property[0]] = callbackResult;
        });
        return returnObject;
    }
    
}
Object.prototype.myMap
function cuadrado(a){
   return a * a;
}
skylabArray.myMap.call(skylabArray, cuadrado)
