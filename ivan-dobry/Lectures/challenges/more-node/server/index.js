const http = require('http');

// req y res son streams
const requestListener = (req, res) => {
	// console.warn(req, { depth: 0 });
	console.warn(req.url);
	// res.end('Mi server funciona');
	// res.end es lo mismo que write + end

	res.write('Skylab mola');
	res.end();
};

const server = http.createServer();
server.on('request', requestListener);

const port = process.env.PORT || 4242;
server.listen(port, () => {
	console.log(`Server is running in port ${port}...`);
});
