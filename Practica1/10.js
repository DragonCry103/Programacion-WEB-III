// 10. Explicación
// Callback: útil para funciones simples y rápidas.
function sumarCallback(a, b, callback) {
  setTimeout(() => {
    let resultado = a + b;
    callback(resultado);
  }, 1000);
}

sumarCallback(3, 4, (res) => {
  console.log("Callback:", res); 
});
// Promesa: mejor cuando hay operaciones asincrónicas más largas y
// cuando necesitamos encadenar procesos (más legible y mantenible).
function sumarPromesa(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let resultado = a + b;
      resolve(resultado);
    }, 1000);
  });
}

sumarPromesa(3, 4).then((res) => {
  console.log("Promesa:", res); 
});
