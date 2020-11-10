function fn(seconds) {
	setTimeout(
		() => console.log(`hello after ${seconds} seconds`),
		seconds * 1000
	);
}

fn(2);

function helloWorld() {
	let counter = 0;

	const interval = setInterval(() => {
		console.log('Hello world');
		counter += 1;
		if (counter === 5) {
			console.log('Done');
			clearInterval(interval);
		}
	}, 1000);
}
