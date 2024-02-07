/* Ejercicio 4 */

const numero = prompt("Introduce un número entero");
 
const resultado = parImpar(numero);
alert("El número "+numero+" es "+resultado);
 
function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}