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
  let count = 0;
  let suma = 0;
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
  let color;
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

//Ejercicio Bous

const abeceradio = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const mayusculaAbecedario = abeceradio.toUpperCase().split(",");

function encriptar(texto) {
  let formateoTexto = texto.trim().toUpperCase();
  let retornarValor = "";

  for (const key in formateoTexto) {
    if (
      mayusculaAbecedario.findIndex((item) => item === formateoTexto[key]) === 0
    )
      retornarValor = retornarValor + "Z";

    if (
      mayusculaAbecedario.findIndex((item) => item === formateoTexto[key]) > 0
    ) {
      let posicionAbecedario = mayusculaAbecedario.findIndex(
        (item) => item === formateoTexto[key]
      );
      retornarValor =
        retornarValor + mayusculaAbecedario[posicionAbecedario - 1];
    }
  }
  return retornarValor;
}
console.log(encriptar("Hola Mundo"));
console.log(encriptar("Preparacion programa"));
