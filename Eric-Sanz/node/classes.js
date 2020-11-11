// las classes sirven para describir las propiedades de tipos de objectos.

class Person {
	name;

	constructor(name) {
		this.name = name;
	}

	greet() {
		return `Hola, mi nombre es ${this.name}`;
	}

	descriptionOfPerson() {
		//Poner static delante
		//Function estatica, no tiene propiedades unicas de cada objecto, y se entra a traves de la clase directamente.
		//Si se le llama desde un objecto creado a partir de la classe da typeError ya que no es una propiedad de esos objectos creados, sino que son de la Classe unicamente.(no utiliza this)
		return 'Person are usually humans';
	}
}

const narco = new Person('Narco'); //devuelve objecto con todas las propiedades o funciones que tiene la classe, en otro objecto.
console.log(narco.greet()); // narco saludara con Hola, ya que esta basado en la classe Person.

const bombasto = new Person('Bombasto'); // se le pasa el nombre para darselo al constructor. Si el constructor tubiera mas propiedades, se le pasarian aqui, para crear el nuevo objecto acorde a la informacion que quieres.
console.log(bombasto.greet());

console.log(Person.descriptionOfPerson());
