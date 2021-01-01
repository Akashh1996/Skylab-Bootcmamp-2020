import http from 'http';

const server = http.createServer((req, res) => {
	res.end('Skylab mola!');
});

const port = 9000;
server.listen(port, () => {
	console.log(`server is running in port ${port}...`);
});
