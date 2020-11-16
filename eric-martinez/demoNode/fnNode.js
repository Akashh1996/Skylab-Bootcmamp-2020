/* function fn(seconds) {
	setTimeout(() => {
		console.log(`Hello after ${seconds} seconds`);
	}, seconds * 1000);
}

fn(2);
fn(4); */

let counter = 0;

const interval = setInterval(() => {
	console.log('hola mundo');
	counter += 1;
	if (counter === 5) {
		console.log('Done');
		clearInterval(interval);
	}
}, 1000);
