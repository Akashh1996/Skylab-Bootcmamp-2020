const fn = () => {
	console.log('Hello after 4 seconds');
	return 'Hello after 8 seconds';
};
const fn2 = () => {
	console.log('"Hello after 4 seconds"');
	return 'Hello after 8 seconds';
};

setTimeout(() => console.log('lalala'), 8000);

const fnseconds = (seconds) => {
	setTimeout(
		() => console.log(`Hello after ${seconds} seconds`),
		seconds * 1000
	);
};

let counter = 0;

const interval = setInterval(() => {
	console.log('Hello World');
	counter++;
	if (counter === 5) {
		console.log('Done');
		clearInterval(interval);
	}
}, 1000);
