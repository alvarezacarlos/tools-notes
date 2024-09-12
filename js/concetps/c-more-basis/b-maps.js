let mapa = new Map();

// forEach: Permite iterar sobre todos los pares clave-valor en el mapa.
mapa.set('a', 1);
mapa.set('b', 2);

mapa.forEach((valor, clave) => {
  console.log(clave, valor);
});
// Salida:
// 'a' 1
// 'b' 2


// entries: Retorna un iterador que contiene los pares clave-valor en el mapa.
for (let [clave, valor] of mapa.entries()) {
  console.log(clave, valor);
}
// Salida:
// 'a' 1
// 'b' 2


// keys: Retorna un iterador que contiene las claves del mapa.
for (let clave of mapa.keys()) {
  console.log(clave);
}
// Salida:
// 'a'
// 'b'


//values: Retorna un iterador que contiene los valores del mapa.
for (let valor of mapa.values()) {
  console.log(valor);
}
// Salida:
// 1
// 2
