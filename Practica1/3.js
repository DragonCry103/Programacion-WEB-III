// 3. Separar pares e impares
function separarParImpar(arr) {
  let obj = { pares: [], impares: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      obj.pares[obj.pares.length] = arr[i];
    } else {
      obj.impares[obj.impares.length] = arr[i];
    }
  }
  return obj;
}
console.log(separarParImpar([1, 2, 3, 4, 5])); 