function isHappy(n, pow) {
    
    let result = 0;
    let results = [];
    let number = n;


    while(result !== 1 && result !== n) {

        result = getPow(number);
        results.push(result);
        number = result;
    }

    if(result === 1) {
        return result;
    }else {
        return results;
    }

}



function getPow(number) {

    let numInicial = number.toString();
    let result= 0;

    for (let i= 0; i < numInicial.length; i++) {
        result += (Math.pow(Number(numInicial[i])));
    }
    return result;

    
}


module.export = getPow, isHappy;