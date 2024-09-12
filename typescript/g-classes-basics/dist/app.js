"use strict";
class Department {
    // long path
    // constructor(n: string,){
    //   this.name = n
    // }
    // short path
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // name: string;  // not needed for short path
        this.employees = []; // public is the default , we can also make methods private
    }
    describe() {
        console.log(`Hello, I am the ${this.name} department`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting', '4');
console.log(accounting);
accounting.describe();
// const it = {name: 'IT', describe: accounting.describe}
// it.describe()
accounting.addEmployee('Jack');
accounting.addEmployee('Mark');
accounting.addEmployee('Peter');
accounting.printEmployeesInfo();
// accounting.employees[2] = 'Laura' // do not work because we set as private.
// accounting.id = 5 // Property 'id' is private and only accessible within class 'Department'.ts(2341)
// inheritance
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
}
const support = new ITDepartment('4', ['Peter']);
console.log(support);
// abstract clases
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows`);
    }
}
// No se puede instanciar una clase abstracta directamente
// const animal = new Animal("Generic Animal"); // Esto dará un error en tiempo de compilación
const myDog = new Dog("Rex");
myDog.speak(); // "Rex barks"
const myCat = new Cat("Whiskers");
myCat.speak(); // "Whiskers meows"
// const canIInstanceYou = new Animal('Tarzan') //Cannot create an instance of an abstract class.ts(2511)
// ******  GINGLETON / PRIVATE CONSTRUCTOR / STATIC METHOD to ACCESS the INSTANCE, only ONE INSTANCE ALLOWED
class Singleton {
    constructor() {
        // Constructor privado para evitar la creación directa de instancias
    }
    static getInstance() {
        // Método estático que devuelve la instancia única
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    showMessage() {
        console.log("Hola desde la instancia Singleton.");
    }
}
// Uso del Singleton
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();
singletonInstance1.showMessage(); // Output: "Hola desde la instancia Singleton."
singletonInstance2.showMessage(); // Output: "Hola desde la instancia Singleton."
console.log(singletonInstance1 === singletonInstance2); // Output: true (ambas referencias son iguales)
