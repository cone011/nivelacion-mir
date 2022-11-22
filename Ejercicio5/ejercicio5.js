function sum(arr) {
  let sumaTotal = 0;
  if (arr.length === 0) return 0;
  for (const key in arr) {
    sumaTotal = sumaTotal + arr[key];
  }
  return sumaTotal;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));

function max(arr) {
  if (arr.length === 0) return undefined;
  let max = 0;
  for (const key in arr) {
    if (key === 1) {
      max = arr[key];
    } else if (arr[key] > max) {
      max = arr[key];
    }
  }
  return max;
}

console.log(max([1, 2, 3]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));

function maxIndex(arr) {
  if (arr.length === 0) return undefined;
  let maxPosition = 0;
  let maxValue = 0;
  for (const key in arr) {
    if (key === 1) {
      maxValue = arr[key];
      maxPosition = key;
    } else if (arr[key] > maxValue) {
      maxValue = arr[key];
      maxPosition = key;
    }
  }
  return maxPosition;
}

console.log(maxIndex([1, 2, 3]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));

function join(arr) {
  if (arr.length === 0) return `""`;
  let cadenaRetornar = "";
  for (const key in arr) {
    cadenaRetornar = cadenaRetornar + `${arr[key]} `;
  }
  return cadenaRetornar;
}

console.log(join(["Hola", "Mundo"]));
console.log(join(["Make", "It", "Real"]));
console.log(join([]));

let matriz = function GenerateMatriz(numero) {
  let arr = [];
  for (let recorrer = 0; recorrer < numero; recorrer++) {
    let items = [];
    for (let recorrerColumna = 0; recorrerColumna < numero; recorrerColumna++) {
      items.push(0);
    }
    arr.push(items);
  }

  var spiralMatriz = function generateSpiralMatriz(arr) {
    let count = 1;
    let topRow = 0; //top Row
    let endRow = arr.length; //end Row
    let topColumn = 0; //top column
    let endColumn = arr[0].length; //end column

    return spiralMatriz(arr);
  };
};

console.log(matriz(2));
console.log(matriz(3));
console.log(matriz(4));
