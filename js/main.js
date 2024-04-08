// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
//     por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
//     números queremos que los genere, podemos pedirlas al usuario antes de generar los
//     números. Este método devolverá un número entero aleatorio. Muestra estos números por
//     consola.

// function generarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generarNumeros(cantidad, min, max) {
//     let numeros = [];
//     for (let i = 0; i < cantidad; i++) {
//         let numeroAleatorio = generarNumeroAleatorio(min, max);
//         numeros.push(numeroAleatorio);
//     }
//     return numeros;
// }

// function main() {
//     let cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números a generar:"));
//     let minimo = parseInt(prompt("Ingrese el valor mínimo:"));
//     let maximo = parseInt(prompt("Ingrese el valor máximo:"));

//     let numerosGenerados = generarNumeros(cantidadNumeros, minimo, maximo);
//     console.log("Números generados:", numerosGenerados);
// }

// main();

//----------------------O---------------------------------//
// const prompt = require("prompt-sync")();

// const generateRandomInteger = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

// let numberOfIntegers = prompt("Diga la cantidad de números: ");
// let min = parseInt(prompt("Valor mínimo: "));
// let max = parseInt(prompt("Valor máximo: "));
// const numbers = [];

// for (let i = 0; i < numberOfIntegers; i++) {
//     let number = generateRandomInteger(min, max);
//     numbers[i] = number;
// }

// for (const n of numbers) {
//     console.log(n);
// }


///////////////////////////////////////////////
// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €


// const prompt = require("prompt-sync")();

// function convertirMoneda(euros, moneda) {
//     let cambio;
//     switch (moneda.toLowerCase()) {
//         case "dolares":
//         case "dólares":
//             cambio = euros * 1.28611;
//             console.log(`${euros} euros equivalen a ${cambio.toFixed(2)} dólares.`);
//             break;
//         case "libras":
//             cambio = euros * 0.86;
//             console.log(`${euros} euros equivalen a ${cambio.toFixed(2)} libras.`);
//             break;
//         case "yenes":
//             cambio = euros * 129.852;
//             console.log(`${euros} euros equivalen a ${cambio.toFixed(2)} yenes.`);
//             break;
//         default:
//             console.log("Moneda no válida.");
//     }
// }

// let cantidadEuros = parseFloat(prompt("Introduzca la cantidad de euros a convertir: "));
// let monedaDestino = prompt("Introduzca la moneda a la que desea convertir (dólares, libras o yenes): ");

// convertirMoneda(cantidadEuros, monedaDestino);


const prompt = require("prompt-sync")();

const EURO_LIBRA = 0.86;
const EURO_DOLAR = 1.28611;
const EURO_YEN = 129.852;

const euro_a_libra = (euros) => euros * EURO_LIBRA;
const euro_a_dolar = (euros) => euros * EURO_DOLAR;
const euro_a_yen = (euros) => euros * EURO_YEN;

const conversion = (euros, moneda) => {
    //moneda = {"libra", "dolar", "yen"}
    switch (moneda) {
        case "libra":
            let libras = euro_a_libra(euros)
            console.log(libras);
            break;
        case "dolares":
            let dolares = euro_a_dolar(euros)
            console.log(dolares);
            break;
        case "yenes":
            let yenes = euro_a_yen(euros)
            console.log(yenes);
            break;

        default:
            console.log("La moneda no és valida");
            break;
    }
};

let euros = prompt("Diga la cantidad de euros: ");
let moneda = prompt("Diga la moneda ['libra', 'dolar', 'yen']: ");


conversion(euros, moneda);