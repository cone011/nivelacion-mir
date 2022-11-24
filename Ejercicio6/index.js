const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

console.log(pedro.edad);

//pedro = { ...pedro, estatura: 1.8 };

pedro.estatura = 1.8;

console.log(pedro);

delete pedro.activo;

console.log(pedro);

for (let key in pedro) {
  if (pedro.hasOwnProperty(key)) {
    console.log(`{${key}} : ${pedro[key]}`);
  }
}

function saludo(nombre) {
  return `Hola, me llamo ${nombre}`;
}

console.log(saludo(pedro.nombre));

function productosBaratos(productos) {
  let arrProducto = [];
  if (productos.length === 0) return arrProducto;
  for (let key in productos) {
    if (productos[key].precio >= 5 && productos[key].precio <= 10) {
      arrProducto.push(productos[key].nombre);
    }
  }
  return arrProducto;
}

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 },
];
console.log(productosBaratos(prods));

function frecuencias(palabra) {
  let arrObject = [];
  for (let key in palabra) {
    if (palabra[key] !== " ") {
      if (arrObject.find((item) => item.letra === palabra[key])) {
        const index = arrObject.findIndex(
          (item) => item.letra === palabra[key]
        );
        arrObject[index].contador = arrObject[index].contador + 1;
      } else {
        arrObject.push({ letra: palabra[key], contador: 1 });
      }
    }
  }

  return arrObject;
}

console.log(frecuencias("hola mundo"));
console.log(frecuencias("anita lava la tina"));
