// forEach: Permite iterar sobre todos los elementos del conjunto.

let conjunto = new Set([1, 2, 3]);

conjunto.forEach((valor) => {
  console.log(valor);
});
// Salida:
// 1
// 2
// 3


// entries: Retorna un iterador que contiene los pares clave-valor (donde la clave y el valor son idénticos) en el conjunto. En los conjuntos, la clave y el valor son iguales.
for (let [clave, valor] of conjunto.entries()) {
  console.log(clave, valor);
}
// Salida:
// 1 1
// 2 2
// 3 3


// keys: Retorna un iterador que contiene los elementos del conjunto.
for (let clave of conjunto.keys()) {
  console.log(clave);
}
// Salida:
// 1
// 2
// 3


// values: Similar a keys(), retorna un iterador que contiene los elementos del conjunto.s
for (let valor of conjunto.values()) {
  console.log(valor);
}
// Salida:
// 1
// 2
// 3

