function sayHelloWorld() {
	let counter = 0;
	let helloWorldIntervalId = setInterval(() => {
		if (counter === 5) {
			console.log('Done');
			clearInterval(helloWorldIntervalId);
		} else {
			counter++;
			console.log('Hello world');
		}
	}, 1000);
}

sayHelloWorld();
