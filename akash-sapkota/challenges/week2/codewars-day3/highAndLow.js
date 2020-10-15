function highAndLow(numbers) {
    const stringArray = numbers.split(" ")
    const numArray = stringArray.map((nums) => Number(nums))
    const maxMin = `${Math.max(...numArray).toString()} ${Math.min(...numArray).toString()}`
    return maxMin
}

module.exports = highAndLow;