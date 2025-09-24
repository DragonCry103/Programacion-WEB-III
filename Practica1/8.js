// 8. Callback después de 2 segundos
function ejecutarCallback(x) {
  setTimeout(x, 2000);
}
ejecutarCallback(() => console.log("Callback ejecutado!"));