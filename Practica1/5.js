// 5. Palíndromo
function esPalindromo(x) {
  let invertida = "";
  for (let i = x.length - 1; i >= 0; i--) {
    invertida += x[i];
  }
  return x === invertida;
}
console.log(esPalindromo("oruro"));
console.log(esPalindromo("hola"));