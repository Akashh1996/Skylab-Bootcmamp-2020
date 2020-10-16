function isHappy(n){
    let result = n.toString();
    let saftyCounter = 0;
    
    while(result != 1 && saftyCounter<1000){
        result = happyStep(result)
        saftyCounter++
        console.log (result)
    }

    
}

function happyStep(n) {
    let arrayNumbers = n.split('');
    
    let result = 0;
    for (let i = 0 ; i<arrayNumbers.length;i++){
        arrayNumbers[i] = parseInt(arrayNumbers[i]);
        result += arrayNumbers[i]*arrayNumbers[i]
        
    }
    console.log(result)
    return result.toString();

}
console.log(isHappy("11"))
module.exports = isHappy;