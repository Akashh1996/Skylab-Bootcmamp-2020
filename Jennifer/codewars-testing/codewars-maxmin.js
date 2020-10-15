function highAndLow(numbers){
    numbers=numbers.split(" ");
    num1 = Math.max(...numbers).toString();
    num2 = Math.min(...numbers).toString();
    let result = num1 + " " + num2;
    return result;
}

module.exports = highAndLow
