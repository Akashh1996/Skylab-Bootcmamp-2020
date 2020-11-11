const numbers = [10, 20, 30, 40];

//Ha de ser lineal, puedes ignorar posiciones poniendo espacio entre comas , , pero siempre sera por posicion de los valores de la array.

const [first, ...rest] = numbers;

//no hace falta que sea ineal ya que son propiedades del objecto y tiene nombre propio, y no hace falta que sa lineal.

const data = {
	name: 'Narco',
	driving: 'VW Polo',
	lastName: 'Traficante',
	age: 34
};

const { name, lastName, ...restObject } = data;

//inmutabilidad de primer nivel. Nuevo objecto con las mismas propiedades que data. Objectos diferentes.
const newData = { ...data };
