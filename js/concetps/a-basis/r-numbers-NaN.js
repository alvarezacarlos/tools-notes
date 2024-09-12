/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.
*/

//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x1 = 100 / "Apple";


//However, if the string is numeric, the result will be a number:
let x2 = 100 / "10";

//You can use the global JavaScript function isNaN() to find out if a value is not a number:
let x3 = 100 / "Apple";
isNaN(x3);

//Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
let x4 = NaN;
let y5 = 5;
let z6 = x4 + y5;

// Or the result might be a concatenation like NaN5:
let x = NaN;
let y = "5";
let z = x + y;

// NaN is a number: typeof NaN returns number:
typeof NaN;