let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

console.log(pedro.edad);

pedro = { ...pedro, estatura: 1.8 };

console.log(pedro);

delete pedro.activo;

console.log(pedro);

for (var key in pedro) {
  if (pedro.hasOwnProperty(key)) {
    console.log(`{${key}} : ${pedro[key]}`);
  }
}

function saludo(nombre) {
  return `Hola, me llamo ${nombre}`;
}

console.log(saludo(pedro.nombre));
