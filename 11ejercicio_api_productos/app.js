const express = require('express');
const app = express ();
const routerProductos = require('.routes/productos');

//para poder trabajar con json
app.use(express.json());

const PORT = 3000;

//enrutamiento
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.use('/productos', routerProductos);

//Middleware - manejo de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});