import express from 'express';
import { muestraProductos, muestraProductoPorId, insertaProductoCtrl, actualizaProductoCtrl, actualizaStockCtrl } from '../controladores/productoControlador.js';

const rutas = express.Router();

rutas.get('/productos', muestraProductos);
rutas.get('/productos/:id', muestraProductoPorId);
rutas.post('/productos', insertaProductoCtrl);
rutas.put('/productos/:id', actualizaProductoCtrl);
rutas.patch('/productos/:id/stock', actualizaStockCtrl);

export default rutas;