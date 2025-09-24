// 14. Convertir promesa en callback
function promesaACallback(promise, x) {
  promise.then(res => x(null, res)).catch(err => x(err));
}
promesaACallback(promesaMensaje(), (err, res) => {
  if (err) console.error(err);
  else console.log("Desde callback:", res);
});
