function lowestProduct(input) {
    let array = input.split('').map(number => parseInt(number));
    let lowest = [];
    if (input.length < 4) {
        return 'Number is too small';
    } else {
        for (let i = 0; i < array.length; i++) {
            lowest.push(array[i] * array[i+1] * array[i+2] * array[i+3]);
        }
        return lowest.sort((a,b) => a - b)[0];
    }
};
  
module.exports = lowestProduct; 