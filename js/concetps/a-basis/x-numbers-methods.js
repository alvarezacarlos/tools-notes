/*
Name                 Description   
constructor          Returns the function that created JavaScript's Number prototype       
EPSILON              Returns the difference between 1 and the smallest number greater than 1       
isFinite()           Checks whether a value is a finite number       
isInteger()          Checks whether a value is an integer       
isNaN()              Checks whether a value is Number.NaN   
isSafeInteger()      Checks whether a value is a safe integer           
MAX_SAFE_INTEGER     Returns the maximum safe integer in JavaScript.                   
MIN_SAFE_INTEGER     Returns the minimum safe integer in JavaScript               
MAX_VALUE            Returns the largest number possible in JavaScript           
MIN_VALUE            Returns the smallest number possible in JavaScript           
NaN                  Represents a "Not-a-Number" value   
NEGATIVE_INFINITY    Represents negative infinity (returned on overflow)                   
POSITIVE_INFINITY    Represents infinity (returned on overflow)               
parseFloat()         Parses a string an returns a number           
parseInt()           Parses a string an returns a whole number       
prototype            Allows you to add properties and methods to an object           
toExponential(x)     Converts a number into an exponential notation               
toFixed(x)           Formats a number with x numbers of digits after the decimal point       
toLocaleString()     Converts a number into a string, based on the locale settings               
toPrecision(x)       Formats a number to x length               
toString()           Converts a number to a string       
valueOf()            Returns the primitive value of a number       
*/

// ------------------

// JavaScript Number Methods
// These number methods can be used on all JavaScript numbers:

// Method	Description
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number
// The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):
/*

let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();


The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

Example
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);
The parameter is optional. If you don't specify it, JavaScript will not round the number.

ADVERTISEMENT

The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:

Example
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
toFixed(2) is perfect for working with money.

The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:

Example
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);
The valueOf() Method
valueOf() returns a number as a number.

Example
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

All JavaScript data types have a valueOf() and a toString() method.

Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	Description
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
The methods above are not number methods. They are global JavaScript methods.

The Number() Method
The Number() method can be used to convert JavaScript variables to numbers:

Example
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
If the number cannot be converted, NaN (Not a Number) is returned.

The Number() Method Used on Dates
Number() can also convert a date to a number.

Example
Number(new Date("1970-01-01"))
Note
The Date() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

Example
Number(new Date("1970-01-02"))
Example
Number(new Date("2017-09-30"))
The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

Example
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
If the number cannot be converted, NaN (Not a Number) is returned.

The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

Example
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
If the number cannot be converted, NaN (Not a Number) is returned.

Number Object Methods
These object methods belong to the Number object:

Method	Description
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number
Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.

These methods can only be accessed like Number.isInteger().

Using X.isInteger() where X is a variable, will result in an error:

TypeError X.isInteger is not a function.

The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.

Example
Number.isInteger(10);
Number.isInteger(10.5);
The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.

Example
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);
Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.

The Number.parseFloat() Method
Number.parseFloat() parses a string and returns a number.

Spaces are allowed. Only the first number is returned:

Example
Number.parseFloat("10");
Number.parseFloat("10.33");
Number.parseFloat("10 20 30");
Number.parseFloat("10 years");
Number.parseFloat("years 10");
If the number cannot be converted, NaN (Not a Number) is returned.

Note
The Number methods Number.parseInt() and Number.parseFloat()

are the same as the

Global methods parseInt() and parseFloat().

The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).

The Number.parseInt() Method
Number.parseInt() parses a string and returns a whole number.

Spaces are allowed. Only the first number is returned:

Example
Number.parseInt("-10");
Number.parseInt("-10.33");
Number.parseInt("10");
Number.parseInt("10.33");
Number.parseInt("10 20 30");
Number.parseInt("10 years");
Number.parseInt("years 10");
*/