import http from 'http';

const server = http.createServer((req, res) => {
	res.end('Skylab mola');
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server is running... in localhost: ${port}`);
});
