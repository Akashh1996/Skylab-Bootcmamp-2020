import http from 'http';

const server = http.createServer((req, res) => {
	res.end('Skylab mola un huevo');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log(`Server is running in localhost ${port}...`);
});
