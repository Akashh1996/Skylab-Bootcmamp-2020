import http from 'http';

const server = http.createServer((request, response) => {
	response.end('Skylab mola mucho');
});

const port = 3000;

server.listen(port, () => {
	console.log('Server is running...');
});
