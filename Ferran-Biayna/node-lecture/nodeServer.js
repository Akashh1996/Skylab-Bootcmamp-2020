const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Slylab mola molt');
})

server.listen(3000, () => {
    console.log('Servidor funcionando')
})