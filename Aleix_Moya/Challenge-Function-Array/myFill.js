const skylabArray = {
    array: {
        1: 5,
        2: 2,
        3: 3
    },
    
    myFill : function callback(callbackFunction) {
        var index = 0;
        Object.entries(this.array).forEach( (property)=>{
            this.array[property[1]] = callbackFunction(this.array[property[1],index]);
            console.log(this.array[property[1]])
            index++;
        });
        return this.array;
    }
    
}
Object.prototype.myFill
function Fill(valor, index){
 const newValor = 10;
 const indexRequired = 0;
    if(index >= indexRequired){
        return newValor;
    }else{
        return valor;
    }
}
skylabArray.myFill.call(skylabArray, Fill);

