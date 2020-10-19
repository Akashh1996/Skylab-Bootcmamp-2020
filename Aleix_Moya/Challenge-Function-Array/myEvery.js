const skylabArray = {
    array: {
        1: 5,
        2: 2,
        3: 3
    },
    
    myEvery : function callback(callbackFunction) {
        var count1 = 0;
        var count2 = 0;
        Object.entries(this.array).forEach( (property)=>{
            let callbackResult = callbackFunction(this.array[property[1]]);
            count1++;
            if(callbackResult){
                count2++;
            }
        });
        if(count1 === count2){
            return true;
        }else{
            return false;
        }
    }
    
}
Object.prototype.myEvery
function Every(a){
  const valor = 2  
  if(a === valor){
      return true;
  }else{
      return false;
  }
}
skylabArray.myEvery.call(skylabArray, Some);
