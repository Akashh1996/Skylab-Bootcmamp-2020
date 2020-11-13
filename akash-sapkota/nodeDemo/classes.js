class Person {
	name;
	constructor(customName) {
		this.name = customName;
	}
	greet() {
		return `hola ${this.name}`;
	}
	static descriptionOfPerson() {
		return 'persons are usually humans';
	}
}

const narco = new Person('narco');
console.log(narco.greet());

const bombasto = new Person('bombasto');
console.log(bombasto.greet());

/* console.log(Person.descriptionOfPerson());
 */
//static inside class is a function that doesnt take part with property so it cant be accessed with the new property given example,
//it is a direct functon that is calledcd with class.descrption

console.log(
	'doesnt work since its static function -->',
	bombasto.descriptionOfPerson()
);
