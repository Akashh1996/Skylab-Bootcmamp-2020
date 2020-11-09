let mammal = { brainy: true}
let human = { teeth: 32, __proto__: mammal};
let gwen = { age: 19, __proto__: human}; //__proto__ coge las propiedades de human, apuntando a su objecto, no a human variable.
gwen.teeth = 31; // al cambiar la propiedad de gwen, no se modifica la del prototype.
//Prototype Shadowing: 
//Javascript siempre mira primero si el objeto tiene esa propiedad, si la tiene no va al prototype, sino, entra prototype a buscarla.
//.hasOwnProperty('propiedad'); nos dice si el objecto tiene esa propiedad en su objeto o si la hereda de algun otro objecto con prototype.


//__proto__ = null, convierte al objeto en un objeto sin prototype.

//Prototype pollution:
//si a partir del objecto original se hace algun cambio en el __proto__ object original, los objetos que apunten a ese proto de ese objeto tambien se agregaran a sus propiedades.
//pero ninguno de ellos lo tendra como .hasOwnProperty.
//intentar no hacer prototype pollution. Bad coding.

class Spiderman { // la class nos sirve como base para crear otros nuevos objetos.
    lookout() {
        alert('My Spider-sense is tingling.');
    }
}; 

let miles = new Spiderman(); 
miles.lookout();