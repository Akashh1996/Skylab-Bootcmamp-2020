function lowestProduct(input) { 
    let numbersSplited = input.split('').map(number => parseInt(number))
    let lowestNumberInArray = [];
    if (input.length < 4) {
        return 'Number is too small'
    } else {
        for (let i = 0; i < numbersSplited.length; i++) {
            lowestNumberInArray.push(numbersSplited[i] * numbersSplited[i + 1] * numbersSplited[i + 2] * numbersSplited[i + 3])
        }
    }
    return lowestNumberInArray.sort((a, b) => a - b)[0];
}
module.exports=lowestProduct;