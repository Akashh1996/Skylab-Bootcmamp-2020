function comparePowers(n1,n2){

    let number1 = Math.log(n1[0]) * n1[1];
    let number2 = Math.log(n2[0]) * n2[1];

    if(number1 > number2) {
        return -1;
    } else if(number1 === number2) {
        return 0;
    }

    return 1;
}

module.exports = comparePowers;