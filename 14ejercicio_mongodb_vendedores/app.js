const express = require('express');
const app = express();
const routeVendedores = require('./routes/vendedores');

app.use(express.json());
app.use('/vendedores', routeVendedores);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});