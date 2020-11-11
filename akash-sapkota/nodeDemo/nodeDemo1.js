function fn(seconds) {
	console.log(arguments);
	setTimeout(() => {
		console.log(`Hello after ${seconds} seconds`);
	}, seconds * 1000);
	setTimeout(() => {
		console.log(`Hello after ${seconds * 2} seconds`);
	}, seconds * 2 * 1000);
}
fn(2);

function fnHello() {
	const x = setInterval(() => {
		console.log(`Hello world`);
	}, 1000);

	setTimeout(() => {
		clearInterval(x);
		console.log('Done');
	}, 6000);
}
fnHello();
