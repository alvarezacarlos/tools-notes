// podrias explicarme mas sobre esa forma primitiva de implementar POO sin clases.
// Por supuesto, puedo profundizar más en cómo JavaScript implementa la programación orientada a objetos (POO) antes de la introducción de las clases. Esto implica el uso de funciones constructoras y prototipos para lograr la abstracción y encapsulación de objetos y comportamientos. Aquí tienes una explicación más detallada:

// Funciones Constructoras:
// En JavaScript, una función constructora es una función que se utiliza para crear objetos. Puede considerarse como una especie de "plantilla" que define la estructura y el comportamiento del objeto. La función constructora generalmente asigna propiedades y métodos al objeto utilizando la palabra clave this.
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
}

const person1 = new Person("Alice", 25);
person1.sayHello(); // Outputs: Hello, my name is Alice and I'm 25 years old.

// Prototipos:Los prototipos son una característica clave en JavaScript que permiten compartir propiedades y métodos entre múltiples instancias de objetos. En lugar de tener métodos duplicados en cada instancia, los métodos se definen en el prototipo de la función constructora y están disponibles para todas las instancias creadas por esa función constructora.


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const person2 = new Person("Bob", 30);
person2.sayHello(); // Outputs: Hello, my name is Bob and I'm 30 years old.
// En este ejemplo, el método sayHello se define en el prototipo de Person. Esto significa que todas las instancias de Person comparten el mismo método, en lugar de tener una copia separada en cada instancia.

// Herencia:
// También es posible lograr la herencia en JavaScript mediante el uso de prototipos. Puedes establecer el prototipo de una función constructora a otra función constructora para heredar propiedades y métodos.

function Student(name, age, school) {
    Person.call(this, name, age);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.showSchool = function() {
    console.log(`I attend ${this.school}.`);
};

const student1 = new Student("Eve", 20, "ABC School");
student1.sayHello();
student1.showSchool();

// En resumen, antes de las clases en ES6, JavaScript implementaba la POO utilizando funciones constructoras y prototipos. Esto permitía crear objetos con propiedades y métodos, compartir métodos entre instancias y lograr la herencia. Aunque las clases han simplificado la sintaxis y el uso de estos conceptos, las funciones constructoras y los prototipos siguen siendo una parte integral de la herencia de JavaScript y su enfoque único en la orientación a objetos.