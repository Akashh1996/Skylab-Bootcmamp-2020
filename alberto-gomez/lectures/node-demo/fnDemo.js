function fn(a, b) {
	setTimeout(() => console.log(`Hello after ${a} seconds`), a * 1000);
	setTimeout(() => console.log(`Hello after ${b} seconds`), b * 1000);
}

function printHello() {
	let i = 0;
	setInterval(() => {
		if (i < 5) {
			console.log('Hello World');
			i++;
		}
	}, 1000);
}
