/* Ejercicio 2 */

// Arreglo para almacenar las ciudades
const ciudades =['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido', 'Roma, Italia', 'Pekín, China', 'Río de Janeiro, Brasil', 'Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto']
// Bucle para solicitar al usuario el nombre de las ciudades
while (true) {
    const ciudad = prompt("Ingrese el nombre de una ciudad (o presione Cancelar para finalizar):");
    
    // Verificar si el usuario presionó Cancelar
    if (ciudad === null) {
        break;
    }

    // Agregar la ciudad al arreglo
    ciudades.push(ciudad);
}

// Mostrar el arreglo generado
console.log("Arreglo de ciudades:", ciudades);

// Mostrar la longitud del arreglo
console.log("Longitud del arreglo:", ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("<h2>Ítems de las posiciones primera, tercera y última:</h2>");
document.write("<p>Primera posición: " + ciudades[0] + "</p>");
document.write("<p>Tercera posición: " + ciudades[2] + "</p>");
document.write("<p>Última posición: " + ciudades[ciudades.length - 1] + "</p>");

// Añadir en última posición la ciudad de París
ciudades.push("París, Francia");

// Escribir por pantalla el elemento que ocupa la segunda posición
console.log("Elemento en la segunda posición:", ciudades[1]);

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
ciudades[1] = "Barcelona, España";

// Mostrar el arreglo actualizado
document.write("<h1>Arreglo de ciudades:</h1>", `<li>${ciudades}</li>`);
