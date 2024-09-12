/*
-- Comparison Operators
==	    
===	
!=
!==	
>	
<	
>=	
<=	

-- Logical Operators
&&
||
!


-- Conditional (Ternary) Operator:  variablename = (condition) ? value1:value2 
let voteable = (age < 18) ? "Too young":"Old enough";


-- isNaN
age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}


-- The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
Example:
let name = null;
let text = "missing";
let result = name ?? text;


-- The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

Example:
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;


*/ 