// Ejercicio 1
function miFuncion(productos) {
  let caros = [];
  let baratos = [];

  for (let i = 0; i < productos.length; i++) {
    let repetido = false;
    for (let j = 0; j < i; j++) {
      if (productos[i].nombre === productos[j].nombre) {
        if (productos[i].precio > productos[j].precio) {
          if (productos[j].precio > 50) {
            caros[caros.length - 1] = productos[i];
          } else {
            baratos[baratos.length - 1] = productos[i];
          }
        }
        repetido = true;
      }
    }
    if (!repetido) {
      if (productos[i].precio > 50) {
        caros[caros.length] = productos[i];
      } else {
        baratos[baratos.length] = productos[i];
      }
    }
  }
  return { caros, baratos };
}

let productos = [
  { nombre: 'cuaderno', precio: 30 },
  { nombre: 'estuche', precio: 60 },
  { nombre: 'cuaderno', precio: 40 }
];
const { caros, baratos } = miFuncion(productos);
console.log(caros, baratos);

// Ejercicio 2
let carrito_productos = [];
let carrito_total = 0;

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function agregar_producto(nombre, precio) {
  await esperar(2000);
  carrito_productos[carrito_productos.length] = { nombre: nombre, precio: precio };
  carrito_total += precio;
}

async function mostrar_carrito() {
  await esperar(3000);
  console.log("Productos:");
  for (let i = 0; i < carrito_productos.length; i++) {
    console.log("- " + carrito_productos[i].nombre + ": " + carrito_productos[i].precio);
  }
}

function calcular_impuesto(porcentaje) {
  return carrito_total * porcentaje / 100;
}

async function miFuncion2() {
  await agregar_producto("Camisa", 20);
  await agregar_producto("Pantalón", 30);
  await mostrar_carrito();
  console.log("Total: " + carrito_total);
  console.log("Impuesto (10%): " + calcular_impuesto(10));
}

miFuncion2();
