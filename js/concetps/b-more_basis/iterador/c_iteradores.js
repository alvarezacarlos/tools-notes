// node list iteration using iterators directly
const pNode = document.querySelectorAll('p')

console.log(pNode.keys())
console.log(pNode.values())

let pNodeListKeys = pNode.keys()  //objetos iteradores
const pNodeListValues = pNode.values() //objetos iteradores

console.log(pNodeListKeys)
console.log(pNodeListValues)

// pNodeListKeys.forEach(elem => console.log(elem))
// Uncaught TypeError: pNodeListKeys.forEach is not a function at main.js:13:15

console.log(pNodeListKeys.next()); // { value: 0, done: false }
console.log(pNodeListKeys.next()); // { value: 1, done: false }
console.log(pNodeListKeys.next()); // { value: 2, done: false }
console.log(pNodeListKeys.next()); // { value: undefined, done: true }

pNodeListKeys = pNode.keys()
console.log(pNodeListKeys.next().value); // { value: 0, done: false }
console.log(pNodeListKeys.next().value); // { value: 1, done: false }
console.log(pNodeListKeys.next().value); // { value: 2, done: false }
console.log(pNodeListKeys.next().value); // { value: undefined, done: true }

pNodeListKeys = pNode.keys() //objeto iterador
let resultNode = pNodeListKeys.next() // first node
while (!resultNode.done) {
  console.log(!resultNode.done)
  console.log(resultNode.value)
  resultNode = pNodeListKeys.next()
}

console.log('hello')
pNodeListKeys = pNode.keys() //objeto iterador
let arrayFromIterator = Array.from(pNodeListKeys)
arrayFromIterator.forEach(elem => console.log(elem))