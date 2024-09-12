// JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:

let x1 = 123;

// But numbers can also be defined as objects with the keyword new:
let y1 = new Number(123);

let x2 = 123;
let y3 = new Number(123);
// Do not create Number objects. The new keyword complicates the code and slows down execution speed. Number Objects can produce unexpected results:

// When using the == operator, x4 and y5 are equal. When using the === operator, x and y are not equal. Since for objects we compare the memory reference. Note the difference between (x4==y5) and (x4===y5).
let x4 = 500;
let y5 = new Number(500);
console.log(x4 == y5) // true
console.log(x4 === y5) // false




// In the example below (x7 === y8) true or false?
let x7 = new Number(500); 
let y8 = new Number(500);
console.log(x7 == y8) // false
console.log(x7 === y8) // false
//both results are false because they are compared their memory ref