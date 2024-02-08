//Ejercicio 1



const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar los meses por pantalla en forma de lista
document.write("Meses del año:");
meses.forEach(function(mes) {
    document.write(`<li>${mes}</li>`);
});