// 11. Encadenamiento de promesas
promesaMensaje()
  .then(msg => {
    console.log(msg);
    return "Siguiente paso";
  })
  .then(res => console.log(res));