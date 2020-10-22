const skylabArray = {
    array: {
        1: 1,
        2: 2,
        3: 3
    },
    
    myFilter : function callback(callbackFunction) {
        const returnObject = {};
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            if(callbackResult){
                returnObject[property[0]] = this.array[property[1]];
            }
        });
        return returnObject;
    }
    
}
Object.prototype.myFilter
function mayorQueUno(a){
  if(a>1){
      return true;
  }else{
      return false;
  }
}
skylabArray.myFilter.call(skylabArray, mayorQueUno)
