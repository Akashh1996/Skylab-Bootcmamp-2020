function highAndLow(stringOfNumbers){
  
    let string = stringOfNumbers;
    
    let previuosNumber = false;
    let currentNumber;
    let maxNumber;
    let minNumber;

    if(string.length < 3){
        return string[0];
    }

    for (let i = 0; i < string.length; i++) {

        if(string[i] === '') {

           continue;
        } else {

            currentNumber = Number(string[i])
        }
        if(previuosNumber !== false) {
            maxNumber = Math.max(previuosNumber, currentNumber)
            minNumber = Math.max(previuosNumber, currentNumber)
        }else {
            previuosNumber = currentNumber;
        }
    }
    
  
    maxNumber.toString();
    minNumber.toString;

    let highAndLow =  maxNumber+ ' ' + minNumber; 
    return highAndLow;
  
}

module.exports = highAndLow;