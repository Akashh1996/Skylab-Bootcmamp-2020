function sayHello(seconds) {
	setTimeout(() => {
		console.log(`Hello after ${seconds} seconds`);
	}, seconds * 1000);
}

sayHello(2);
sayHello(4);
