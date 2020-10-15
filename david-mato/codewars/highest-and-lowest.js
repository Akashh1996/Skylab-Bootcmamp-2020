const highAndLow = (numbers) =>
	`${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`;

module.exports = highAndLow;
