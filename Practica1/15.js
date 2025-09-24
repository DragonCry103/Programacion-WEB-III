// 15. Convertir callback en promesa
function callbackAPromesa(x) {
  return new Promise((resolve, reject) => {
    x((err, res) => (err ? reject(err) : resolve(res)));
  });
}

// Ejemplo de uso
function ejemploCallback(y) {
  setTimeout(() => y(null, "Resultado del callback"), 1000);
}
callbackAPromesa(ejemploCallback).then(res => console.log(res));