// 2. Invertir el orden de las letras de un texto
function invertirCadena(cad) {
  let invertida = "";
  for (let i = cad.length - 1; i >= 0; i--) {
    invertida += cad[i];
  }
  return invertida;
}
console.log(invertirCadena("abcd"));