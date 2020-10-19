const skylabArray = {
    array: {
        1: 5,
        2: 2,
        3: 3
    },
    
    mySome : function callback(callbackFunction) {
        let returnObject;
        var first = 0;
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            if(callbackResult){
                return callbackResult;
            }
        });
    }
    
}
Object.prototype.mySome
function Some(a){
  const valor = 2  
  if(a === valor){
      return true;
  }else{
      return false;
  }
}
skylabArray.mySome.call(skylabArray, Some);
