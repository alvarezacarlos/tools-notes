const pNodes = document.querySelectorAll('p')
const pArray = Array.from(pNodes)

console.log(typeof(pNodes))
console.log(pNodes)

console.log(typeof(pArray))
console.log(pArray)

console.log(pArray.keys())
console.log(pArray.values())

const arrayValuesIterator = pArray.values()
const arrayKeysIterator = pArray.keys()

console.log(arrayValuesIterator)
console.log(arrayKeysIterator)

for (elem of arrayValuesIterator) {
  console.log(elem)
}

for (elem of arrayKeysIterator) {
  console.log(elem)
}

for (let elem in arrayKeysIterator) {
  console.log(elem)
}
