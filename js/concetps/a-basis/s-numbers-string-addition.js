/*Adding Numbers and Strings

WARNING !!
JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.
*/

//If you add two numbers, the result will be a number:
let n1 = 10;
let n2 = 20;
let n3 = n1 + n2;

// If you add two strings, the result will be a string concatenation:
let s1 = "10";
let s2 = "20";
let s3 = s1 + s2;

// If you add a number and a string, the result will be a string concatenation or add a string and a number, the result will be a string concatenation:
let nx = 10;
let sx = "20";
let sr = nx + sx;
console.log(sr)


// A common mistake is to expect this result to be 30:
let num1 = 10;
let num2 = 20;
let result1 = "The result is: " + num1 + num2;
console.log(result1)

// the correct form will be: 
let nx1 = 10;
let nx2 = 20;
let resultx1 = "The result is: " + (nx1 + nx2);
console.log(resultx1)

// A common mistake is to expect this result to be 102030, but since he JavaScript interpreter works from left to right.first 10 + 20 is added because x and y are both numbers. then 30 + "30" is concatenated because z is a string.
let a = 10;
let b = 20;
let c = "30";
let d = a + b + c;
console.log(d)