"use strict";
let user1;
user1 = {
    name: "Carlos",
    age: 27,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet('Hello, I am');
// we can inplement puntiple interfaces, opposite to the class inheritance
class Human {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const user2 = new Human('Carlos');
user2.greet('Hello I am');
// user2.name = 'Peter'
user2.greet('Hello I am');
// Función que implementa la interfaz
const add = (a, b) => {
    return a + b;
};
// Uso de la función
const sum = add(5, 3);
console.log(sum); // Output: 8
// Function that takes a PersonInterface object
function greet(person) {
    console.log(`Hello, ${person.name}!`);
    if (person.age !== undefined) {
        console.log(`You are ${person.age} years old.`);
    }
    if (person.email !== undefined) {
        console.log(`Your email is ${person.email}.`);
    }
}
// Using the interface with all properties
const pers1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
greet(pers1);
// Using the interface with only the required property
const pers2 = {
    name: "Bob"
};
greet(pers2);
// Function that implements the interface
const manipulateString = (input, toUpperCase, prefix) => {
    let result = input;
    if (toUpperCase) {
        result = result.toUpperCase();
    }
    if (prefix) {
        result = `${prefix} ${result}`;
    }
    return result;
};
// Using the function
console.log(manipulateString("hello")); // Output: "hello"
console.log(manipulateString("hello", true)); // Output: "HELLO"
console.log(manipulateString("hello", true, "Greeting:")); // Output: "Greeting: HELLO"
// Class that implements the interface with only the required method
class SimpleLogger {
    log(message) {
        console.log(message);
    }
}
// Class that implements the interface with all methods
class AdvancedLogger {
    log(message) {
        console.log(`LOG: ${message}`);
    }
    error(message) {
        console.error(`ERROR: ${message}`);
    }
    warn(message) {
        console.warn(`WARN: ${message}`);
    }
}
// Using the loggers
const simpleLogger = new SimpleLogger();
simpleLogger.log("This is a log message.");
const advancedLogger = new AdvancedLogger();
advancedLogger.log("This is a log message.");
advancedLogger.error("This is an error message.");
advancedLogger.warn("This is a warning message.");
