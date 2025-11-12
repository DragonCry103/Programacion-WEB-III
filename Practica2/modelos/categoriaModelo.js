import { db } from '../config/db.js';

// Obtener todas las categorías
export const obtCategorias = async () => {
  const [rows] = await db.query('SELECT * FROM categorias');
  return rows;
};

// Obtener una categoría por ID 
export const obtCategoriaPorId = async (id) => {
  const [cat] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  const [prod] = await db.query('SELECT * FROM productos WHERE categoria_id = ?', [id]);
  return { ...cat[0], productos: prod };
};

// Insertar una nueva categoría
export const insertaCategoria = async ({ nombre, descripcion }) => {
  const [res] = await db.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  );
  return { id: res.insertId, nombre, descripcion };
};

// Actualizar categoría
export const actualizaCategoria = async (id, { nombre, descripcion }) => {
  await db.query('UPDATE categorias SET nombre=?, descripcion=?, fecha_act=NOW() WHERE id=?', [nombre, descripcion, id]);
  return { id, nombre, descripcion };
};

// Eliminar categoría 
export const eliminaCategoria = async (id) => {
  await db.query('DELETE FROM categorias WHERE id=?', [id]);
  return id;
};