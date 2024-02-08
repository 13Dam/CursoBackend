const express = require('express');
const app = express();
const productosRouter = require('./routes/productos');
const errorHandler = require('./middleware/errorHandler');
const { auth } = require('express-oauth2-jwt-bearer');

const PORT = process.env.PORT || 3000;
//verificador de TOKEN jwt
const jwtCheck = auth({
    secret: 'k49kngKf8rTh8QNyzhVPjxrSNcuonWyW',
    audience: 'http://localhost:3000/api/productos',
    issuerBaseURL: 'https://dev-nivpla57n54i46g3.us.auth0.com/',
    tokenSigningAlg: 'HS256'
});

app.use(express.json());
// validar todos los endpoints
app.use(jwtCheck);

//Ruta base
app.get('/', (req, res) => {
    res.send('API de productos');
});

//Ruta productos
app.use('/api/productos', productosRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});