//Ejercicio1

function hola(cadena) {
  return `Hola ${cadena}!`;
}

console.log(hola("Pedro"));
console.log(hola("Juan"));
console.log(hola(""));

//Ejercicio2
function bmi(peso, altura) {
  return peso / Math.pow(altura, 2);
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));

//Ejercio3
function sum(numero) {
  var count = 0;
  var suma = 0;
  while (count <= numero) {
    suma = suma + count;
    count = count + 1;
  }
  return suma;
}

console.log(sum(4));
console.log(sum(10));
console.log(sum(15));

//Ejercicio4
function calcularColor(numero) {
  var color;
  if (numero === 1) {
    color = "black";
  } else if (numero === 2) {
    color = "blanco";
  } else if (numero === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }
  return `El color es: ${color}`;
}

console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));
