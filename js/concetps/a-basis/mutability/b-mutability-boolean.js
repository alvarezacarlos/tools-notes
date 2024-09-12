const v8 = require('v8');

let valueOne = true;
let valueTwo = !valueOne;  // Creates a new boolean with the opposite value

console.log(valueOne)
console.log(valueTwo)


let valueOneAddress = v8.serialize(valueOne).toString('hex');
let valueTwoAddress = v8.serialize(valueTwo).toString('hex');
console.log(valueOneAddress)
console.log(valueTwoAddress)


valueOne = false

console.log(valueOne)
console.log(valueTwo)


valueOneAddress = v8.serialize(valueOne).toString('hex');
valueTwoAddress = v8.serialize(valueTwo).toString('hex');
console.log(valueOneAddress)
console.log(valueTwoAddress)


// isTrue = false;  // This doesn't change the value of isFalse
// console.log(isFalse);  // isFalse is still true