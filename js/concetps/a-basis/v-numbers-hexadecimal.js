// Hexadecimal

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

let x = 0xFF;

// Never write a number with a leading zero (like 07). Some JavaScript versions interpret numbers as octal if they are written with a leading zero. By default, JavaScript displays numbers as base 10 decimals. But you can use the toString() method to output numbers from base 2 to base 36. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

let myNumber = 15
console.log(myNumber.toString(32))
console.log(myNumber.toString(16))
console.log(myNumber.toString(12))
console.log(myNumber.toString(10))
console.log(myNumber.toString(8))
console.log(myNumber.toString(2))