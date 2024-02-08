const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/empresa");

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: String,
}, { collection: 'productos' });

const Producto = mongoose.model('Producto', ProductoSchema);
module.exports = Producto;