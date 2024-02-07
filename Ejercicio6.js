//Ejercicio 6
        
//inicialización de variables
let lado1 = lado2 = 0;
const perimetro = 0;
//pedimos la información al usuario
lado1 = preguntarDato();
lado2 = preguntarDato();

//lado1 y lado2 en realidad son variales absolutas. por scope no haría falta pasarlas pero lo hacemos como ejemplo didáctico
//calculamos y escribimos el perímetro conocidos los lados 
escribePerimetro(lado1,lado2);

//declaración de funciones       
function preguntarDato(){
    return parseFloat(window.prompt("escribe la longitud de un número"));
}    
//fijaros que la variable a toma el valor de lado1 y variable b toma el valor de lado2
function escribePerimetro(a,b){
    let perimetro = 2*(a+b);
    document.write("el perimetro de un rectángulo de lados " + a + " y " + b +" es "+perimetro);
}