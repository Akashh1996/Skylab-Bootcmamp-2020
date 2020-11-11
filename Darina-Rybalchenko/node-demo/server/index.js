const http = require('http');
const port = process.env.PORT || 4242;

// req y res son streams

const requestListener = (req, res) => {
    //console.warn(req, { depth: 0 })
    console.warn(res, { depth: 0 })
    // res.end('Mi server funciona');
    // res.end es lo mismo que res.write + end

    res.write('SkyLab mola!!');
    res.end();
}

const server = http.createServer();
server.on('request', requestListener)

server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});

