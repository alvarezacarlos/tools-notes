// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


for (variable of iterable) {
  // code block to be executed
}


// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
// iterable - An object that has iterable properties.


// Looping over an Array

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}


