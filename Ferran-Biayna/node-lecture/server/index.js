const http = require('http');

// req y res son streams
const requestListener = (req, res) => {
    // res.end('Mi server funciona');
    console.warn(res, {depth:0})
    // res.end es lo mismo que res.write + end
    res.write('Skylab mola!');
    res.end('Mi server funciona');
};

const server = http.createServer(requestListener);
// server.on('request', requestListener)

const port = process.env.PORT || 4242;

server.listen(port, () => {
	console.log(`Server is running in port ${port}`);
});
