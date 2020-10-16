function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return result = `${Math.max(...numbers)} ${Math.min(...numbers)}`;
};

module.exports = highAndLow; 