let a = 5;
let b = 10;

if (a > b) {
  console.log('a is greater than b');
}

if (a < b) {
  console.log('a is less than b');
}

if (a === b) {
  console.log('estas mal mi chavo, revisa tu cerebro');
} else {
  console.log('estas bien mi chavo, sigue asi');
}

/*declaracion de variables */
let nombre = 'Pedro',
  puntuacion = 0,
  record;
record = 5000;

console.log(nombre, puntuacion, record);

/*operadores*/
console.log(10 + 10);
console.log(20 - 10);
console.log(10 * 10);
console.log(20 / 10);
console.log(5 + 6 * 3);
console.log((5 + 6) * 3);

let precioUnidad, cantidad, total;

precioUnidad = 3.5;
cantidad = 5;
total = precioUnidad * cantidad;

console.log('El total de la compra es: ' + total);

/*fallas con el simbolo + */

let pantalon = 10;
let camisa = '5';
console.log(pantalon + camisa);
