const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hola Mundo')

})
const port = process.env.PORT || 9000;
server.listen(port, () => {
    console.log(`ahora puedes hacer peticiones en localhost: ${port}`)

})