function fn() {
	let counter = 0;
	const interval = setInterval(() => {
		console.log(`Helo World`);
		counter++;
		if (counter === 5) {
            clearInterval(interval)
        }
	}, 1000);
}

fn()
