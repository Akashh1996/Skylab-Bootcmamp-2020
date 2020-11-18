import http from 'http';

const server = http.createServer((req, res) => {
	res.end('skylab mola');
});

const port = process.env.PORT || 7000;
server.listen(port, () => {
	console.log('funciona server');
});
