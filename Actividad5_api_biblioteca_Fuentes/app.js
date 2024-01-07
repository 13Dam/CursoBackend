const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');
const librosRouter = require('./routes/libros');

app.use(express.json());
app.use(errorHandler);
app.use('/libros', librosRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
})