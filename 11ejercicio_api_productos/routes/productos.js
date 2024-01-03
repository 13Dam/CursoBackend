const express = require('express');

//org de enrutamiento
const routerProductos = express.Router();

/* app.get('/productos', (req, res) => {
    const categoria = req.query.categoria;
    const stock = req.query.stock;
    //Aquí puedes usar parámetros de categoría para realizar una búsqueda de productos en esa categoría
    res.send(`Realizar búsqueda de productos en la categoría "${categoria}" y con stock "${stock}"`);
}); */

/* parametro de encabezado
routerProductos.get('/', (req, res) => {
    const authToken = req.header('Authorization');
    //Aquí se puede usar el authToken para autenticar al usuario o realizar validaciones adicionales
    res.send(`Token de autorización: ${authToken}`);
}) */

//convierte un objeto en json
routerProductos.get('/', (req, res) => {
    const productos = [
        { id : 1, nombre: 'Tablet'},
        { id : 2, nombre: 'PC'}
    ];
    res.json(productos);
});

routerProductos.get('/:id', (req, res) => {
    const productoId = req.params.id;
    //Lógica para obtener información del usuario con el ID específico
    res.send(`Información del producto con ID ${productoId}`);
});

//parametros de body
routerProductos.post('/', (req, res) => {
    const producto = req.body;
    //Aquí se puede guardar el nuevo producto en la base de datos o realizar operaciones relacionadas con el producto
    res.send(`Guardar nuevo producto: ${JSON.stringify(producto)}`);
})

routerProductos.put('/', (req, res) =>{
    //lógica para crear producto
    res.send('Producto creado correctamente');
});

module.exports = routerProductos;