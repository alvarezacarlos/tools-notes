function* miGenerador() {
  console.log('Hello 1')
  yield 1;
  console.log('Hello 2')
  yield 2;
  console.log('Hello 3')
  yield 3;
  console.log('Hello 4')
}

let gen = miGenerador();
for (let valor of gen) {
  console.log(valor); // Output: 1, 2, 3
}

let gen2 = miGenerador();
console.log(gen2.next()); // { value: 1, done: false }
console.log(gen2.next()); // { value: 2, done: false }
console.log(gen2.next()); // { value: 3, done: false }
console.log(gen2.next()); // { value: undefined, done: true }
console.log(gen2.next()); // { value: undefined, done: true }
console.log(gen2.next()); // { value: undefined, done: true }
console.log(gen2.next()); // { value: undefined, done: true }