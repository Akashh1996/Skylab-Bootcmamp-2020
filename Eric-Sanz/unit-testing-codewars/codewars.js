function disemvowel(str) {
    str.replace(/[aeiou]/gi,'');
    return str;
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return result = `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

function findOdd(array) {
    let count = {};
    array.forEach(number => {
      count[number] = count[number] ? count[number] + 1 : 1;
    });

    for (key in count) {
        if (count[key] % 2 != 0) {
          return Number(key);
        } 
      }
};

function pigIt(str){
  return str.split(' ').map ((word) => {
      if(word === '!' || word === '?') {
          return word;
      } else {
          return word.substr(1) + word[0] + 'ay';
      }
  }).join(' ');
}

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