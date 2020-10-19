const skylabArray = {
    array: {
        1: 7,
        2: 2,
        3: 3
    },
    
    myReduce : function callback(callbackFunction) {
        var totalis = this.array[Object.keys(this.array)[0]]*2;
        let result = totalis;
        var size = 0, key;
        for (key in this.array) {
            if(this.array.hasOwnProperty(key)){ size++}
        }
        Object.entries(this.array).forEach( (property)=>{
            console.log("Raaa " + this.array[property[1]]);
            result = callbackFunction(result, this.array[property[1]]);
            console.log("totalis " + totalis);
            console.log("result " + result);
            console.log("REee " + this.array[property[1]]);
        });
        
        return result;
    }
    
}
Object.prototype.myReduce
function Redux(total, a){
   let result = total - a;
   return result;
}
skylabArray.myReduce.call(skylabArray, Redux)