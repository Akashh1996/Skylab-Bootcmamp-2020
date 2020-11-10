function disemvowel(str) {
    var splitStr = str.split('')
    return splitStr.filter(function(e) {
      return !(e == "a" || e == 'A' || e == 'e' || e == 'E' || e == 'i' || e == 'I' || e == 'o' || e == 'O' || e == 'u' || e == 'U')
    }).join('')
  }

  module.exports = disemvowel; 

  function highAndLow(numbers) {
    var numArr = numbers.split(" ");
    var sortedNumArr = numArr.sort(function(a, b) {
      return a - b;
    });
    return sortedNumArr[sortedNumArr.length - 1] + " " + sortedNumArr[0];
  }

  module.exports = highAndLow;

  function findOdd(A) { 


    var maxNum = 0;
    var count = 0;
    for(var i = 0; i < A.length; i++) {
      for(var j = 0; j < A.length; j++) {
            if(A[i] == A[j]) {
              count++;
            }
        }
        if(count > maxNum){
            maxNum = count;
        }
    }
    count = 0;
  }

  module.exports = findOdd;

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