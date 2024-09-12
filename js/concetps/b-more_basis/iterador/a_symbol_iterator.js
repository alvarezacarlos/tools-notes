// const myArray = [1, 2, 3];
// const iteratorObject = myArray[Symbol.iterator]();
// for (const element of iteratorObject) {
//   console.log(element);
// }

// const myArray = [1, 2, 3];
// const iteratorMethod = myArray[Symbol.iterator].bind(myArray);
// const iteratorObject = iteratorMethod()
// for (const element of iteratorObject) {
//   console.log(element);
// }

const myArray = [1, 2, 3];
const myArrayOfColors = ['Red', 'Blue', 'Green', 'Black'];

const iteratorMethod = Array.prototype[Symbol.iterator].bind(myArrayOfColors);
const iteratorObject = iteratorMethod()
for (const element of iteratorObject) {
  console.log(element);
}