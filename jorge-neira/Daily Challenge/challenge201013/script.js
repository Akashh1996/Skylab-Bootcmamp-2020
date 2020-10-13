const strictEquals = (a, b) => {
	if (Object.is(a, b)) {
		if (Object.is(a, NaN)) return false;
		else return true;
	} else {
		if (
			Object.is(a, 0) ||
			Object.is(0, b) ||
			Object.is(a, -0) ||
			Object.is(-0, b)
		) {
			return true;
		} else {
			return false;
		}
	}
};

console.log(strictEquals(1, 1)); //true
console.log(strictEquals(NaN, NaN)); //false
console.log(strictEquals(0, -0)); //true
console.log(strictEquals(-0, 0)); //true
console.log(strictEquals(1, '1')); //false
console.log(strictEquals(true, false)); //false
console.log(strictEquals(false, false)); //true
console.log(strictEquals('Water', 'Oil')); //false

const objectClone = (object) => {
	let x = Object.assign({}, object, { name: 'nuria' });
	console.log(x);
	return x;
};

let person = { name: 'jorge', age: 25 };

// console.log(person);
console.log(objectClone(person));
console.log(person);
// person.name = 'nuria';
