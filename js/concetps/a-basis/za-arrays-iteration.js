/*

Array iteration methods operate on every array item.

JavaScript Array forEach()
The forEach() method calls a function (a callback function) once for each array element.

Example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. The example can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:

Example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses only the value parameter, the index and array parameters can be omitted:

Example
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
JavaScript Array flatMap()
ES2019 added the Array flatMap() method to JavaScript.

The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

Example
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
Browser Support
JavaScript Array flatMap() is supported in all modern browsers since January 2020:

Chrome 69	Edge 79	Firefox 62	Safari 12	Opera 56
Sep 2018	Jan 2020	Sep 2018	Sep 2018	Sep 2018
ADVERTISEMENT

JavaScript Array filter()
The filter() method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
In the example above, the callback function does not use the index and array parameters, so they can be omitted:

Example
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
JavaScript Array reduce()
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
The reduce() method can accept an initial value:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
JavaScript Array reduceRight()
The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.

This example finds the sum of all numbers in an array:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
JavaScript Array every()
The every() method checks if all array values pass a test.

This example checks if all array values are larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
When a callback function uses the first parameter only (value), the other parameters can be omitted:

Example
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
JavaScript Array some()
The some() method checks if some array values pass a test.

This example checks if some array values are larger than 18:

Example
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
JavaScript Array indexOf()
The indexOf() method searches an array for an element value and returns its position.

Note: The first item has position 0, the second item has position 1, and so on.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Syntax
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf() returns -1 if the item is not found.

If the item is present more than once, it returns the position of the first occurrence.

JavaScript Array lastIndexOf()
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Example
Search an array for the item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
Syntax
array.lastIndexOf(item, start)
item	Required. The item to search for
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the beginning
JavaScript Array find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
find() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
find() is not supported in Internet Explorer.

JavaScript Array findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

Example
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
Browser Support
findIndex() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
findIndex() is not supported in Internet Explorer.

JavaScript Array.from()
The Array.from() method returns an Array object from any object with a length property or any iterable object.

Example
Create an Array from a String:

Array.from("ABCDEFG");
Browser Support
from() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
from() is not supported in Internet Explorer.

JavaScript Array Keys()
The Array.keys() method returns an Array Iterator object with the keys of an array.

Example
Create an Array Iterator object, containing the keys of the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}
Browser Support
keys() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
keys() is not supported in Internet Explorer.

JavaScript Array entries()
Example
Create an Array Iterator, and then iterate over the key/value pairs:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
The entries() method returns an Array Iterator object with key/value pairs:

[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

The entries() method does not change the original array.

Browser Support
entries() is an ES6 feature (JavaScript 2015).

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
entries() is not supported in Internet Explorer.

JavaScript Array includes()
ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
Syntax
array.includes(search-item)
Array.includes() allows to check for NaN values. Unlike Array.indexOf().

Browser Support
includes() is an ECMAScript 2016 feature.

It is supported in all modern browsers:

Chrome	Edge	Firefox	Safari	Opera
Yes	Yes	Yes	Yes	Yes
includes() is not supported in Internet Explorer.

JavaScript Array Spread (...)
The ... operator expands an iterable (like an array) into more elements:

Example
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
*/