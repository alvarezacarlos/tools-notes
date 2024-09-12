// JavaScript Class Syntax

// Use the keyword class to create a class. Always add a method named constructor():

// Syntax
class ClassName {
  constructor() {}
}

// A JavaScript class is not an object.It is a template for JavaScript objects. 
// If you do not define a constructor method, JavaScript will add an empty constructor method.


// JavaScript Class Inheritance
// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar1 = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar1.show();


// Getters and Setters
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar2 = new Car("Ford");
document.getElementById("demo").innerHTML = myCar2.cnam;

// Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
// The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
// You can use the underscore character to separate the getter/setter from the actual property:
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar3 = new Car("Ford");
document.getElementById("demo").innerHTML = myCar3.carname;

// To use a setter, use the same syntax as when you set a property value, without parentheses:
// Use a setter to change the carname to "Volvo":

class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar4 = new Car("Ford");
myCar4.carname = "Volvo";
document.getElementById("demo").innerHTML = myCar4.carname;

// Hoisting
// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
// That means that you must declare a class before you can use it:
//You cannot use the class yet.
myCar = new Car("Ford") // will raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar4 = new Car("Ford")

// Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).


// JavaScript Static Methods
// Static class methods are defined on the class itself. You cannot call a static method on an object, only on an object class.
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar5 = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

// If you want to use the myCar object inside the static method, you can send it as a parameter:

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);