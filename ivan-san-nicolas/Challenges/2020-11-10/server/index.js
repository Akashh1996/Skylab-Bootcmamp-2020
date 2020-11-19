const http = require('http');

//req and res are streams
const requestListener = (req, res) => {
    //console.warn(req, { dept: 0 });
    console.warn(res, { dept: 0 });
    //res.end('mi server funciona');
    //res.end es lo mismo que write + end
    res.write('Skylab mola!');
    res.end();
}

const server = http.createServer();
server.on('request', requestListener);

const port = process.env.port || 4242;
server.listen(port, () => {
    console.log(`Server is running. in port ${port}..`);
});