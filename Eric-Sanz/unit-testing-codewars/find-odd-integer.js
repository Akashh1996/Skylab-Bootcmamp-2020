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

module.exports = findOdd; 