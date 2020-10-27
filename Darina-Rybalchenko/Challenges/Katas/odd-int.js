function findOdd(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let appereances = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                appereances += 1
            }
        }
        if (appereances % 2 !== 0) {
            return numbers[i]
        }
    }
}

module.exports = findOdd