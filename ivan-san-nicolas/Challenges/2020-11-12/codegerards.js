const array = [1, 3, 6, 8, 3, 6, 8, 5, 4];
const totalSum = 13;

function findTheSum(array, totalSum) {
    for (let index = 0; index < array.length; index++) {
        let number = array[index];
        for (let secondIndex = index + 1; secondIndex < array.length; secondIndex++) {
            if (number + array[secondIndex] === totalSum) {
                console.log(`${number} + ${array[secondIndex]} = ${totalSum}`);
                return true;
            }
        }
    }
    console.log("There's no combination of numbers which's sum is equal to 13");
    return false;
}

findTheSum(array, totalSum);
