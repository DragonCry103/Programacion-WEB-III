import express from 'express';
import { muestraCategorias, muestraCategoriaPorId, insertaCategoriaCtrl, actualizaCategoriaCtrl, eliminaCategoriaCtrl } from '../controladores/categoriaControlador.js';

const rutas = express.Router();

rutas.get('/categorias', muestraCategorias);
rutas.get('/categorias/:id', muestraCategoriaPorId);
rutas.post('/categorias', insertaCategoriaCtrl);
rutas.put('/categorias/:id', actualizaCategoriaCtrl);
rutas.delete('/categorias/:id', eliminaCategoriaCtrl);

export default rutas;