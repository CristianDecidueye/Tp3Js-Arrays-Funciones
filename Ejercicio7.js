// Ejercicio 7

// Función para crear y mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    let mensaje = "Tabla de multiplicar del " + numero + " (del 1 al 10):\n";
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        mensaje += numero + " x " + i + " = " + resultado + "\n";
    }
    alert(mensaje);
}

// Solicitar al usuario un número
var numeroUsuario = prompt("Ingrese un número para ver su tabla de multiplicar:");

// Verificar si se ingresó un número válido
if (!isNaN(numeroUsuario)) {
    // Convertir la entrada a un número
    let numeroElegido = parseFloat(numeroUsuario);

    // Llamar a la función para mostrar la tabla de multiplicar
    mostrarTablaMultiplicar(numeroElegido);
} else {
    alert("Por favor, ingrese un número válido.");
}
