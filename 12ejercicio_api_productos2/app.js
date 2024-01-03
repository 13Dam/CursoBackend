const express = require('express');
const app = express();
const routeProductos = require('./routes/productos');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/productos', routeProductos);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});