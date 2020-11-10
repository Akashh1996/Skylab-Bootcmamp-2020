import http from 'http';

const server = http.createServer((req, resp) => {
	resp.end('hola');
});

const port = 9000;
server.listen(port, () => {
	console.log(`ahora puedes hacer peticionesaen localhost: ${port}`);
});
