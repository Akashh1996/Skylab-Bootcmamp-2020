const skylabArray = {
    array: {
        1: 5,
        2: 2,
        3: 3
    },
    
    myFind : function callback(callbackFunction) {
        let returnObject;
        var first = 0;
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            if(callbackResult && first === 0){
                returnObject = this.array[property[1]];
                first = 1;
            }
        });
        return returnObject;
    }
    
}
Object.prototype.myFind
function igualQue2(a){
  if(a < 5){
      return true;
  }else{
      return false;
  }
}
skylabArray.myFind.call(skylabArray, igualQue2);
