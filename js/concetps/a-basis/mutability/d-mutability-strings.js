const v8 = require('v8');

let valueOne = 'Carlos';
let valueTwo = valueOne;  // Creates a new boolean with the opposite value

console.log(valueOne)
console.log(valueTwo)


let valueOneAddress = v8.serialize(valueOne).toString('hex');
let valueTwoAddress = v8.serialize(valueTwo).toString('hex');
console.log(valueOneAddress)
console.log(valueTwoAddress)

valueOne = valueOne.toUpperCase()

console.log(valueOne)
console.log(valueTwo)


valueOneAddress = v8.serialize(valueOne).toString('hex');
valueTwoAddress = v8.serialize(valueTwo).toString('hex');
console.log(valueOneAddress)
console.log(valueTwoAddress)