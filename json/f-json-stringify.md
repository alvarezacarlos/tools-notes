A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().


---
Stringify a JavaScript Object

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

The result will be a string following the JSON notation. myJSON is now a string, and ready to be sent to a server:


---
Stringify a JavaScript Array

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
The result will be a string following the JSON notation. myJSON is now a string, and ready to be sent to a server:



---
Storing Data

When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.

JSON makes it possible to store JavaScript objects as text.

Example
Storing data in local storage

// Storing data:
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

