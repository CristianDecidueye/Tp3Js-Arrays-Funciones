// Función para simular el lanzamiento de un dado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Inicializar un array para almacenar la frecuencia de las sumas
const frecuenciaSumas = new Array(11).fill(0);

// Realizar 50 lanzamientos
for (let i = 0; i < 50; i++) {
    // Lanzar dos dados y obtener la suma
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    const suma = dado1 + dado2;

    // Incrementar la frecuencia de la suma en el array
    frecuenciaSumas[suma - 2]++;
}

// Mostrar los resultados
console.log("Frecuencia de las sumas después de 50 lanzamientos:");
for (let j = 2; j <= 12; j++) {
    console.log("Suma " + j + ": " + frecuenciaSumas[j - 2] + " veces");
}