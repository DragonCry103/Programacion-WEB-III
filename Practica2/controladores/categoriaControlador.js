import { obtCategorias, obtCategoriaPorId, insertaCategoria, actualizaCategoria, eliminaCategoria } from '../modelos/categoriaModelo.js';

export const muestraCategorias = async (req, res) => {
  try {
    const data = await obtCategorias();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const muestraCategoriaPorId = async (req, res) => {
  try {
    const data = await obtCategoriaPorId(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const insertaCategoriaCtrl = async (req, res) => {
  try {
    const data = await insertaCategoria(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizaCategoriaCtrl = async (req, res) => {
  try {
    const data = await actualizaCategoria(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminaCategoriaCtrl = async (req, res) => {
  try {
    await eliminaCategoria(req.params.id);
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};