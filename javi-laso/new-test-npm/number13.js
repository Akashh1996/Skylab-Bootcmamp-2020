const arr = [1, 2, 9, 4];

function pairOfNumbersSumTarget(arrToCheck, target) {
  for (let index = 0; index < arrToCheck.length; index += 1) {
    for (let secondI = index + 1; secondI < arrToCheck.length; secondI += 1) {
      if (arrToCheck[index] + arrToCheck[secondI] === target) {
        return true;
      }
    }
  }
  return false;
}

// eslint-disable-next-line no-unused-vars
function pairOfNumbersSumTargetSecondAttempt(arrToCheck, target) {
  for (let index = 0; index < arr.length; index += 1) {
    index += 1;
  }
}

// eslint-disable-next-line no-console
console.log(pairOfNumbersSumTarget(arr, 13));
