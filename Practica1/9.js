// 9. Promesa que devuelve un mensaje después de 3 segundos
function promesaMensaje() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Éxito después de 3 segundos"), 3000);
  });
}
promesaMensaje().then(msg => console.log(msg));