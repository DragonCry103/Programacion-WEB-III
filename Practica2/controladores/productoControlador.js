import { obtProductos, obtProductoPorId, insertaProducto, actualizaProducto, actualizaStock } from '../modelos/productoModelo.js';

export const muestraProductos = async (req, res) => {
  try {
    const data = await obtProductos();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const muestraProductoPorId = async (req, res) => {
  try {
    const data = await obtProductoPorId(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const insertaProductoCtrl = async (req, res) => {
  try {
    const data = await insertaProducto(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizaProductoCtrl = async (req, res) => {
  try {
    const data = await actualizaProducto(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizaStockCtrl = async (req, res) => {
  try {
    const data = await actualizaStock(req.params.id, req.body.cantidad);
    res.json({ message: 'Stock actualizado', data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};