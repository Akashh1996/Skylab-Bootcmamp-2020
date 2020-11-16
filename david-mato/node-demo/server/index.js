const http = require('http');

// req y res son streams
const requestListener = (req, res) => {
    // console.warn(req, { depth: 0 })
    // console.warn(res, { depth: 0 });
    // console.warn(req.url)
    // res.end('Mi server funciona');
    // res.end es lo mismo que write + end;
    // res.end('Mi server funciona');
    res.write('Skylab sdfsdfsdfsdfmola');
    res.end();
};

const server = http.createServer(requestListener);
server.on('request', requestListener);

const port = process.env.PORT || 4242;
server.listen(port, () => {
    console.log(`Server is running... in localhost: ${port}`);
});
