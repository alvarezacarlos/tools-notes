/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
*/

let myNumber = 2;

// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

// Division by 0 (zero) also generates Infinity:
let x =  2 / 0;
let y = -2 / 0;


// Infinity is a number: typeof Infinity returns number.
typeof Infinity;