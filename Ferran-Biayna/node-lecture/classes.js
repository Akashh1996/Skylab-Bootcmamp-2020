class Person {

    name;

    constructor(constructorName) {
        this.name = constructorName
    }


	greet() {
		return `Hola, mi nombre es ${this.name}`
    }
    
    static descriptionOfPerson() {
        return 'Persons are usually humans'
    }

}

const narco = new Person('Narco');
console.log(narco.greet());

const bombasto = new Person('Bombasto');
console.log(bombasto.greet());

console.log(Person.descriptionOfPerson())
