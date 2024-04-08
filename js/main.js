// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
//     por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
//     números queremos que los genere, podemos pedirlas al usuario antes de generar los
//     números. Este método devolverá un número entero aleatorio. Muestra estos números por
//     consola.

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarNumeros(cantidad, min, max) {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = generarNumeroAleatorio(min, max);
        numeros.push(numeroAleatorio);
    }
    return numeros;
}

function main() {
    let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a generar:"));
    let minimo = parseInt(prompt("Ingrese el valor mínimo:"));
    let maximo = parseInt(prompt("Ingrese el valor máximo:"));

    let numerosGenerados = generarNumeros(cantidadNumeros, minimo, maximo);
    console.log("Números generados:", numerosGenerados);
}

main();
