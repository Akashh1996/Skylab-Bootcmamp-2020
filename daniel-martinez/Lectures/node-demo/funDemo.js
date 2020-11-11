function fn() {
	Object.values(arguments).map((seconds) =>
		setTimeout(() => {
			console.log(`Hello after ${seconds} seconds`);
		}, seconds * 1000)
	);
}

function fn2() {
	let times = 0;
	let interval = setInterval(() => {
		if (times === 4) {
			clearInterval(interval);
		}
		console.log('Hello World');
		times++;
	}, 1000);
}

fn2();
