const skylabArray = {
    array: {
        1: 5,
        2: 2,
        3: 3
    },
    
    myFilter : function callback(callbackFunction) {
        let returnObject;
        var first = 0;
        var index = 0;
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            if(callbackResult && first === 0){
                returnObject = index;
                first = 1;
            }
            if(first === 0){
                index++;
            }
        });
        return returnObject;
    }
    
}
Object.prototype.myFilter
function igualQue2(a){
  if(a < 5){
      return true;
  }else{
      return false;
  }
}
skylabArray.myFilter.call(skylabArray, igualQue2);
