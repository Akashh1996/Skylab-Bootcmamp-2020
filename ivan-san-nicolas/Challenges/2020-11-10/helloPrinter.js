let helloPrinter = (seconds) => {
	let count = 0;
	const printer = setInterval(() => {
		console.log(`Hello after ${count + 1} seconds`);
		count++;
		if (count >= 5) {
			clearInterval(printer);
		}
	}, seconds * 1000);
};

helloPrinter(1);
