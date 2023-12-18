const http = require('http');
const { hostname } = require('os');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('"mensaje": "Hola Mundo!"');
})

server.listen(PORT, HOSTNAME, () =>{
    console.log(`Servidor corriendo en http://${HOSTNAME}:${PORT}/`);
});