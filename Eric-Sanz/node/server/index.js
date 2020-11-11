const http = require('http');

//definir las dependencias como dependencias de desarollo. ponerlas dentro de devDependencies en el package.json.

//request y response son streams.Hilos de conexion. (request se origina en el cliente y va al servidor y response al reves.)
const requestListener = (request, response) => {
	//console.warn(response, { depth: 0 }); // para ver la informacion de primer nivel de la response, o de la request, dependiendo de cual pongas.
	console.warn(request.url); // peticion para ver la url de la request. se puede pedir cualquier cosa para verla por consola.
	//response.send() en este caso de prueba como se pone solo una cosa, con el end ya funciona.
	//response.end('Mi server funciona');

	//respone.end es lo mismo que write + end.
	response.write('My server is working');
	response.end();
};

const server = http.createServer(requestListener);
//server.on('request', requestListener) --> especifica que cuando ocurre una request invoque al callback requestListener. (es como un eventEmitter).

const port = process.env.PORT || 4242;

server.listen(port, () => {
	console.log(`Server is runnig... in port ${port}`);
});
