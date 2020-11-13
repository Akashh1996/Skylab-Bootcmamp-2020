const arr = [1, 5, 6, 8, 3, 6, 8, 9, 4];

function thirteen(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] + array[j] === 13) {
        return 'true';
      }
    }
  }
  return 'false';
}

console.log(thirteen(arr));
