class Person {
	constructor(nameHero) {
		this.name = nameHero;
	}

	name;

	greet() {
		return `Hola, mi nombre es ${this.name}`;
	}

	static descriptionOfPerson() {
		return 'Persons are usually humans';
	}
	// solo se puede llamar static desde la parent class
}

const narco = new Person('Narco');
console.log(narco.greet());

const bombasto = new Person('Bombasto');
console.log(bombasto.greet());
