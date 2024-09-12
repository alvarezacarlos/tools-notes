// ***** INTERSECTION TYPES

type Admin = {
  name: string;
  provilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Carlos',
  provilages: ['create-server'],
  startDate: new Date()
}


// ****** TYPE CASTING
// const userInput = <HTMLInputElement>document.querySelector('#message-output')!
const userInput = document.querySelector('#message-output')! as HTMLInputElement;
userInput.value  = 'Hi There'


// ****** FUNCTION OVERLOADING
// Function signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// Function implementation
function add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "string") {
        return a.toString() + b;
    } else if (typeof a === "string" && typeof b === "number") {
        return a + b.toString();
    }
}

// Examples of using the overloaded function
console.log(add(1, 2));          // Output: 3
console.log(add("Hello, ", "World!")); // Output: "Hello, World!"
console.log(add(1, " World!"));  // Output: "1 World!"
console.log(add("Hello, ", 2));  // Output: "Hello, 2"




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

console.log(userA?.address?.city); // Output: 'Wonderland'
// console.log(userA?.contact?.phone); // Output: undefined (no error thrown)


// **** Calling Methods
const userB = {
    name: 'Bob',
    greet() {
        return `Hello, ${this.name}!`;
    }
};
console.log(userB?.greet?.()); // Output: 'Hello, Bob!'

const user2 = null;
// console.log(user2?.greet?.()); // Output: undefined (no error thrown)



// **** Accessing Arrays
const users = [
    { name: 'Charlie' },
    { name: 'Dave' }
];
console.log(users?.[1]?.name); // Output: 'Dave'
console.log(users?.[2]?.name); // Output: undefined (no error thrown)


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
console.log(obj?.func?.() ?? 'Function does not exist'); // Output: 'Function exists'

const obj2 = {};
// console.log(obj2?.func?.() ?? 'Function does not exist'); // Output: 'Function does not exist'


// **** Advantages of Optional Chaining
/*
  Prevents Errors: Avoids runtime errors when trying to access properties on undefined or null objects.
  Improves Readability: Makes the code cleaner and more readable by reducing the need for repetitive null checks.
  Simplifies Code: Reduces the amount of code needed for defensive programming.
  Optional chaining is a powerful tool that simplifies the handling of objects in JavaScript, making your code more robust and easier to read.
*/