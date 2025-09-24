// 16. Migrar promesa a async/await
async function migrar() {
  try {
    let res = await promesaMensaje();
    console.log("Migrado:", res);
  } catch (e) {
    console.error(e);
  }
}
migrar();