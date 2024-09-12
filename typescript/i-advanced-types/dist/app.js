"use strict";
// ***** INTERSECTION TYPES
var _a, _b, _c, _d, _e, _f;
const e1 = {
    name: 'Carlos',
    provilages: ['create-server'],
    startDate: new Date()
};
// ****** TYPE CASTING
// const userInput = <HTMLInputElement>document.querySelector('#message-output')!
const userInput = document.querySelector('#message-output');
userInput.value = 'Hi There';
// Function implementation
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return a.toString() + b;
    }
    else if (typeof a === "string" && typeof b === "number") {
        return a + b.toString();
    }
}
// Examples of using the overloaded function
console.log(add(1, 2)); // Output: 3
console.log(add("Hello, ", "World!")); // Output: "Hello, World!"
console.log(add(1, " World!")); // Output: "1 World!"
console.log(add("Hello, ", 2)); // Output: "Hello, 2"
// ****** FUNCTION CHAINING
/*
Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to explicitly check each level for null or undefined values. It uses the ?. syntax to ensure that if any part of the chain is null or undefined, the entire expression will return undefined instead of throwing an error.


Accessing Nested Properties:
Use ?. to safely access properties.


Calling Methods:
Use ?.() to safely call methods.

Accessing Arrays:
Use ?.[] to safely access elements in an array.
*/
// Examples
// **** Accessing Nested Properties
const userA = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Wonderland'
    }
};
console.log((_a = userA === null || userA === void 0 ? void 0 : userA.address) === null || _a === void 0 ? void 0 : _a.city); // Output: 'Wonderland'
// console.log(userA?.contact?.phone); // Output: undefined (no error thrown)
// **** Calling Methods
const userB = {
    name: 'Bob',
    greet() {
        return `Hello, ${this.name}!`;
    }
};
console.log((_b = userB === null || userB === void 0 ? void 0 : userB.greet) === null || _b === void 0 ? void 0 : _b.call(userB)); // Output: 'Hello, Bob!'
const user2 = null;
// console.log(user2?.greet?.()); // Output: undefined (no error thrown)
// **** Accessing Arrays
const users = [
    { name: 'Charlie' },
    { name: 'Dave' }
];
console.log((_c = users === null || users === void 0 ? void 0 : users[1]) === null || _c === void 0 ? void 0 : _c.name); // Output: 'Dave'
console.log((_d = users === null || users === void 0 ? void 0 : users[2]) === null || _d === void 0 ? void 0 : _d.name); // Output: undefined (no error thrown)
// **** Combining Optional Chaining with Other Features
/*
Using Optional Chaining with Nullish Coalescing
The nullish coalescing operator (??) can be used with optional chaining to provide default values.
*/
const user = {
    name: 'Eve'
};
// console.log(user?.address?.street ?? 'Street not available'); // Output: 'Street not available'
// **** Using Optional Chaining with Function Calls
// When calling a function that might not exist, you can combine optional chaining with a fallback:
const obj = {
    func: () => 'Function exists'
};
console.log((_f = (_e = obj === null || obj === void 0 ? void 0 : obj.func) === null || _e === void 0 ? void 0 : _e.call(obj)) !== null && _f !== void 0 ? _f : 'Function does not exist'); // Output: 'Function exists'
const obj2 = {};
// console.log(obj2?.func?.() ?? 'Function does not exist'); // Output: 'Function does not exist'
// **** Advantages of Optional Chaining
/*
  Prevents Errors: Avoids runtime errors when trying to access properties on undefined or null objects.
  Improves Readability: Makes the code cleaner and more readable by reducing the need for repetitive null checks.
  Simplifies Code: Reduces the amount of code needed for defensive programming.
  Optional chaining is a powerful tool that simplifies the handling of objects in JavaScript, making your code more robust and easier to read.
*/ 
