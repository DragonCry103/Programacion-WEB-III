// 13. Ejemplo de anidamiento de promesas con async/await
async function proceso() {
  let res1 = await promesaMensaje();
  console.log(res1);
  let res2 = await promesaMensaje();
  console.log(res2);
}
proceso();