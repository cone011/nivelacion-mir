const receta = {};

receta.nombre = "Sandwich";

console.log(receta);

receta.ingredientes = [];

console.log(receta);

receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

console.log(receta);

receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

console.log(receta);

console.log(receta.ingredientes[0].nombre);

function suma(arr) {
  let sumaTotal = 0;
  for (let key in arr) {
    sumaTotal = sumaTotal + arr[key].cantidad;
  }
  return sumaTotal;
}

console.log(suma(receta.ingredientes));

function maxCaracter(cadena) {
  let arrObject = [];
  let valorRetonar = "";
  let valorCantidad = 0;
  for (let key in cadena) {
    if (arrObject.find((item) => item.letra === cadena[key])) {
      const index = arrObject.findIndex((item) => item.letra === cadena[key]);
      arrObject[index].contador = arrObject[index].contador + 1;
    } else {
      arrObject.push({ letra: cadena[key], contador: 1 });
    }
  }
  for (let recorrer in arrObject) {
    if (arrObject[recorrer].contador > valorCantidad) {
      valorCantidad = arrObject[recorrer].contador;
      valorRetonar = arrObject[recorrer].letra;
    }
  }
  return valorRetonar;
}

console.log(maxCaracter("abcccccd"));

function palindromo(cadena) {
  let remover = /[^A-Za-z0-9]/g;

  let lowCadena = cadena.toLowerCase().replace(remover, "");

  let reversoCadena = lowCadena.split("").reverse().join("");

  return lowCadena === reversoCadena;
}

console.log(palindromo("Amor a Roma"));

console.log(palindromo("vamos makers!"));
