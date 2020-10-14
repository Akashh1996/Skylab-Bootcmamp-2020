function highAndLow(numbers){
    let newArr = numbers.split(' ').map(x=>+x);
    let max = Math.max(...newArr).toString();
    let min = Math.min(...newArr).toString();
    return max + ' '+ min
  }

  module.exports = highAndLow;