import http from 'http';

const server = http.createServer((res) => {
    res.end('Slylab mola molt');
})

const port = process.env.PORT || 7000

server.listen(port, () => {
    console.log(`Servidor funcionando en el port ${port}`)
})