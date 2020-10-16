const human = {
    teeth: 32
}

const gwen = {
    ...human,
    age: 19
}

//----------------------------------------------------------
const array = [1, 2];
const sum = (x, y) => {
    return x + y;
}

sum(...array);


//----------------------------------------------------------

const date = [28, 01, 1988];
const time = [08, 25, 30];
const fullDate = [...date, ...time];


//----------------------------------------------------------

const bodyPart = ['shoulders', 'knees'];
const song = ['head', ...bodyPart, 'toes'];
console.log(song);


//----------------------------------------------------------

const suma = (...values) => console.log(values);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // y todos lo que quiera ya que al hacer destructuring (...values) pasa todos los values que hayan.



//----------------------------------------------------------


const reducerSum = (account, current) => account + current;
const suma = (...values) => values.reduce(reducerSum, 0);


//----------------------------------------------------------

const {
    PI,
    E,
    SQRT2
} = Math;

const circle = {
    label: 'Circle X',
    radius: 2,
};

const circleArea = ({
    radius
}) => { //({radius}) a esta funcion se le pasa el elemento que es un objeto que tiene una propiedad radius.
    return (PI * radius * radius).toFixed(2);
};

circleArea(circle);

const {
    label,
    radius
} = circle; //destructuring propiedades de un objeto.
console.log(label);
console.log(radius);


//----------------------------------------------------------

//... crea un nuevo valor


const x = [1, 2];

x.some(value => value === 14); //some va mirando 1 a 1 los elementos del array y si lo encuentra retorna verdadero, y sino falso.

const skylabArray = {};

skylabArray[0] = 1;
skylabArray[1] = 2;
skylabArray['length'] = 2;


//crear un prototype donde vas a implementar las arrays que vas a crear