import { db } from '../config/db.js';

// Obtener todos los productos 
export const obtProductos = async () => {
  const [rows] = await db.query(`
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
  `);
  return rows;
};

// Obtener producto por ID 
export const obtProductoPorId = async (id) => {
  const [rows] = await db.query(`
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?
  `, [id]);
  return rows[0];
};

// Insertar nuevo producto
export const insertaProducto = async ({ nombre, precio, stock, categoria_id }) => {
  const [res] = await db.query(
    'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
    [nombre, precio, stock, categoria_id]
  );
  return { id: res.insertId, nombre, precio, stock, categoria_id };
};

// Actualizar producto
export const actualizaProducto = async (id, { nombre, precio, stock, categoria_id }) => {
  await db.query(
    'UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=?, fecha_act=NOW() WHERE id=?',
    [nombre, precio, stock, categoria_id, id]
  );
  return { id, nombre, precio, stock, categoria_id };
};

// Actualizar solo el stock
export const actualizaStock = async (id, cantidad) => {
  await db.query('UPDATE productos SET stock = stock + ?, fecha_act=NOW() WHERE id=?', [cantidad, id]);
  return { id, cantidad };
};