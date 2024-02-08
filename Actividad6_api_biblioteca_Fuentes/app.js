const express = require('express');
const app = express();
const librosRouter = require('./routes/libros');
const errorHandler = require('./middlewares/errorHandler');
const { auth } = require("express-oauth2-jwt-bearer");

const PORT = process.env.PORT || 3000;

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: "http://localhost:3000/api/biblioteca",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
});

app.use(express.json());

app.use('/libros', autenticacion, librosRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
})