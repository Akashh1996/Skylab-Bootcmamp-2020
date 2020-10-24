const skylabArray = {   
    myWithin : (original,index, begin) =>{
        let toCopy = {};
        let j = 0;
        for(let i = index; i < original.length; i++){
            [toCopy[j]] = original.array[i];
            j++;
        }
        var abastCopy = j;
        console.log(toCopy);
        
        for(i = begin, j = 0; i < (index), j < (abastCopy + 1) ; i++, j++){   
            if(j === (abastCopy)){
                j = 0;
            }
            if(i === index){
                break;
            }
            original.array[i] = toCopy[j]; 
        }
    
    }
}
let customArray = {
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
customArray.myWithin(customArray, 2);
console.log(customArray);