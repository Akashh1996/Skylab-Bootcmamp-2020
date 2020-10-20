const skylabArray = {   
    myReduce : (original) =>{
        for(let i = (original.length-1); i>0; i-- ){
            original.array[0] = original.array[0] - original.array[i];
            delete original.array[i];
        }
        
    }
}
let customArray = {
    array: {
        '0': 7,
        '1': 1,
        '2': 2,
        '3': 1,
        '4': 1 
    },
    length: 5,
    __proto__: skylabArray
}
customArray.myReduce(customArray);
console.log(customArray);