import http from 'http';

const server = http.createServer((req, resp) => {
	resp.end('Skylab mola');
});

const port = 9000;
server.listen(9000, () => {
	console.log(`ahora puedes hacer peticionesaen localhost: ${port}`);
});
