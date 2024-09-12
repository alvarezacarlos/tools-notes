const myIterableObj = {
  anyDatitos: ["a", "b", "c"],
  [Symbol.iterator]: function () {
    let indice = 0;
    return {
      next: () => {
        if (indice < this.anyDatitos.length) {
          return { value: this.anyDatitos[indice++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

//***************** iterate using iterator and calling the next method line by line
// const symbolIterador = Array.prototype[Symbol.iterator]
// const myObjectIterador = symbolIterador.bind(myIterableObj)()
// console.log(myObjectIterador)

const symbolIterador = myIterableObj[Symbol.iterator]
const myObjectIterador = symbolIterador.bind(myIterableObj)()
// console.log(myObjectIterador)

console.log(myObjectIterador.next()) // { value: 'a', done: false }
console.log(myObjectIterador.next()) // { value: 'b', done: false }
console.log(myObjectIterador.next()) // { value: 'c', done: false }
console.log(myObjectIterador.next()) // { done: true }
console.log(myObjectIterador.next()) // { done: true }
console.log(myObjectIterador.next()) // { done: true }

// using a while
const symbolIterador2 = myIterableObj[Symbol.iterator]
const myObjectIterador2 = symbolIterador.bind(myIterableObj)()
let result = myObjectIterador2.next()
while (!result.done) {
  console.log(result)
  result = myObjectIterador2.next()
}

// iterate the iterable object using the for of which accept iterables
for (const value of myIterableObj) {
  console.log(value); // 1, 2, 3
}


//***************** iterate using converting to an array
const arrayFromIterable = Array.from(myIterableObj) // js iterates the iterable object just as we did with te nearrayFromIteralet method created based on the array and creates an array
console.log(arrayFromIterable)
arrayFromIterable.forEach(elem => console.log(elem))  // JS again create its own iterable from this new created array to then iterate it using the next method just as we did before.
