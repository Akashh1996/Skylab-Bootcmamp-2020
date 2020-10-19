const pigIt = (str) =>
	str
		.split(' ')
		.map((x) =>
			x === '!' || x === '?' ? x : (x = `${x.slice(1)}${x.slice(0, 1)}ay`)
		)
		.join(' ');

module.exports = pigIt;
