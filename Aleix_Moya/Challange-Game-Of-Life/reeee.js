const skylabArray = {
    
    fillGrid : (original, ofWhat) =>{
        for(let i = 0; i < original.length; i++){
            original.array[i] = ofWhat;
        }
    }
}

var customArray = {
    array: {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        '3': 'd',
        '4': 'e' 
    },
    length: 5,
    __proto__: skylabArray
}
customArray.fillGrid(customArray, cell);
console.log(customArray);