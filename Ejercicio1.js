/* Arrays 
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar los meses por pantalla en forma de lista
document.write("Meses del año:");
meses.forEach(function(mes) {
    document.write(`<li>${mes}</li>`);
});