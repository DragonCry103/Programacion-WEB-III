// 12. Reemplazar callbacks anidados con async/await
function tarea(x) {
  return new Promise(resolve => setTimeout(resolve, x));
}
async function ejecutar() {
  await tarea(1000);
  console.log("Paso 1");
  await tarea(1000);
  console.log("Paso 2");
}
ejecutar();