import http from 'http';

const server = http.createServer((request, response) => {
	response.end('Skylab mola!');
});

server.listen(3001, () => {
	console.log('server is working!');
});