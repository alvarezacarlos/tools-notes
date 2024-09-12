/*
Numeric Strings
JavaScript strings can have numeric content:
*/
let x1 = 100;         // x is a number

let y1 = "100";       // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:
// This will work:
let x2 = "100";
let y3 = "10";
let z4 = x2 / y3;
console.log(z4)

// This will also work:
let x5 = "100";
let y6 = "10";
let z7 = x5 * y6;
console.log(z7)

// And this will work:
let x8 = "100";
let y9 = "10";
let z10 = x8 - y9;
console.log(z10)

// But this will not work:
let x = "100";
let y = "10";
let z = x + y;
console.log(z)