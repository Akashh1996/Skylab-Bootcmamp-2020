class Person {
    name;
    
    constructor(customName) {
        this.name = customName;
    };

    greet() {
        return `Hi! My name is ${this.name}`;
    };


    //Static methods are useful for get values that don't 
    //depend of the actual object, but the class itself!!
    static personDescription() {
        return ("Persons are usually humans... Didn't know that?");
    };
}

const narco = new Person('Narco');
const bombasto = new Person('Bombasto');

console.log(Person.personDescription());

console.log(bombasto.greet());