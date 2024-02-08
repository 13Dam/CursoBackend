const express = require('express');
const app = express();
const productosRouter = require('./routes/productos');
const errorHandler = require('./middlewares/errorHandler');
const { auth } = require('express-oauth2-jwt-bearer');

const PORT = process.env.PORT || 3000;

const oauthCheck = auth({
    audience: 'http://localhost:3000/api/productos',
    issuerBaseURL: 'https://dev-utn-frc-iaew.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.use(express.json());

//Ruta base
app.get('/', (req, res) => {
    res.send('API de productos');
});

//Ruta productos
app.use('/api/productos', oauthCheck, productosRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;