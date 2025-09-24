// 1. Contar cuántas veces aparece cada vocal
function contarVocales(texto) {
  let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
    if (letra === "a") vocales.a++;
    else if (letra === "e") vocales.e++;
    else if (letra === "i") vocales.i++;
    else if (letra === "o") vocales.o++;
    else if (letra === "u") vocales.u++;
  }
  return vocales;
}
console.log(contarVocales("euforia")); 