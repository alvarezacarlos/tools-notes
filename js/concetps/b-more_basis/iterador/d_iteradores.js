const miArray = ['a', 'b', 'c'];
const iterador = miArray.values();

console.log(Array.from(iterador)); // ['a', 'b', 'c']
console.log(Array.from(iterador)); // ['a', 'b', 'c']

// O utilizando el operador de propagación
// console.log([...iterador]); // ['a', 'b', 'c']
// console.log([...iterador]); // ['a', 'b', 'c']