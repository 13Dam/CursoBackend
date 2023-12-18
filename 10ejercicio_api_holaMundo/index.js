const http = require('http');

const HOSTNAME = '127.0.0.1'; //localhost
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo!');
});

server.listen(PORT, HOSTNAME, () => {
    console.log('Iniciando Servidor Web');
})