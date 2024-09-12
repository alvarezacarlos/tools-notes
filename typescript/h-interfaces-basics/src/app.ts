// interface inheritance (we can inherit from multiple interfaces) the opposite to clases
// interface to be implemented by object
interface Named {
  name: string;  
}

interface Person extends Named{  
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Carlos",
  age: 27,

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hello, I am');



// ******  Interfaces as contract for a class
interface Greetable {
  readonly name: string;  // we can add readonly , we can not add private, public etc.

  greet(phrase: string): void
}

// we can inplement puntiple interfaces, opposite to the class inheritance
class Human implements Greetable{
  readonly name: string;
  age = 30;

  constructor(name: string){
    this.name = name
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}

const user2 = new Human('Carlos')

user2.greet('Hello I am')

// user2.name = 'Peter'

user2.greet('Hello I am')



// ******  Interfaces to be implemented by functions
// Definición de la interfaz para una función que suma dos números
interface AddFunction {
  (a: number, b: number): number;
}

// Función que implementa la interfaz
const add: AddFunction = (a: number, b: number): number => {
  return a + b;
};

// Uso de la función
const sum = add(5, 3);
console.log(sum); // Output: 8



// ****** INTERFACES OPTIONAL PROPS
// **** Example 1: Basic Interface with Optional Properties
// In TypeScript, you can define interfaces with optional properties. Optional properties are defined by adding a question mark (?) after the property name. Here are some examples to illustrate how to define and use interfaces with optional properties:

// Defining an interface with optional properties
interface PersonInterface {
  name: string;
  age?: number;  // Optional property
  email?: string; // Optional property
}

// Function that takes a PersonInterface object
function greet(person: PersonInterface) {
  console.log(`Hello, ${person.name}!`);
  if (person.age !== undefined) {
    console.log(`You are ${person.age} years old.`);
  }
  if (person.email !== undefined) {
    console.log(`Your email is ${person.email}.`);
  }
}

// Using the interface with all properties
const pers1: PersonInterface = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};
greet(pers1);

// Using the interface with only the required property
const pers2: PersonInterface = {
  name: "Bob"
};
greet(pers2);



// **** Example 2: Interface for a Function with Optional Parameters
// Defining an interface for a function with optional parameters
interface StringManipulator {
  (input: string, toUpperCase?: boolean, prefix?: string): string;
}

// Function that implements the interface
const manipulateString: StringManipulator = (input: string, toUpperCase?: boolean, prefix?: string): string => {
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



// **** Example 3: Interface with Optional Methods
// Defining an interface with optional methods
interface Logger {
  log(message: string): void;
  error?(message: string): void; // Optional method
  warn?(message: string): void; // Optional method
}

// Class that implements the interface with only the required method
class SimpleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

// Class that implements the interface with all methods
class AdvancedLogger implements Logger {
  log(message: string): void {
    console.log(`LOG: ${message}`);
  }
  error(message: string): void {
    console.error(`ERROR: ${message}`);
  }
  warn(message: string): void {
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
