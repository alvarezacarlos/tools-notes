/*
-- QA
puedes explicarme mas sobre el this en ambas funciones?
Por supuesto, el comportamiento de this es una de las diferencias más importantes entre las funciones flecha y las funciones declarativas. Vamos a explorar más a fondo cómo funciona this en cada tipo de función.
Funciones Declarativas (function):
En las funciones declarativas, el valor de this se determina en el momento en que la función es llamada o ejecutada. El valor de this está influenciado por cómo se llama la función y el contexto en el que se ejecuta. Aquí hay algunos casos comunes:
*/

// Llamada Directa: Cuando una función declarativa se llama directamente, el valor de this generalmente se refiere al objeto que está llamando la función.
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
}

const person = {
    name: "Alice",
    greet: sayHello
};

person.greet(); // Outputs: Hello, my name is Alice


/*
Funciones como Métodos:
Cuando una función declarativa se utiliza como método de un objeto, el valor de this se refiere al objeto en el que se encuentra el método.
*/

const person3 = {
    name: "Alice",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person3.sayHello(); // Outputs: Hello, my name is Alice

/*
Funciones Flecha (=>):
En las funciones flecha, el valor de this se hereda del contexto circundante, es decir, del ámbito en el que se define la función flecha. Esto significa que el valor de this dentro de una función flecha es el mismo que el valor de this fuera de la función flecha.

Contexto del Padre:
El valor de this dentro de una función flecha es el mismo que el valor de this en el contexto circundante (el ámbito en el que se encuentra la función flecha).
*/
const person2 = {
    name: "Alice",
    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`); // "this" se refiere al contexto circundante (global o el objeto que contiene a "person")
    }
};

person2.sayHello(); // Outputs: Hello, my name is undefined

/*
Ámbito Global:
En el caso de las funciones flecha definidas a nivel global, this se refiere al objeto global (por ejemplo, window en el navegador o global en Node.js).
*/
const globalFunction = () => {
    console.log(this === window); // En el navegador, esto será "true"
};

globalFunction(); // Outputs: true

/*
En resumen, el comportamiento de this en las funciones flecha es más predecible y menos sujeto a cambios dependiendo de cómo se llama la función. En las funciones declarativas, this puede variar dependiendo del contexto de llamada, mientras que en las funciones flecha, this se mantiene constante basado en el ámbito en el que se definen.

-- QA
puedo utilizar arrow functions como metodos de clases o no es recomendable?

Sí, puedes utilizar funciones flecha como métodos de clases en JavaScript. Sin embargo, hay algunas consideraciones importantes a tener en cuenta antes de hacerlo. Veamos las ventajas y desventajas de usar funciones flecha como métodos de clases:

Ventajas:

Sintaxis Concisa: Las funciones flecha tienen una sintaxis más concisa en comparación con las funciones declarativas, lo que puede hacer que el código sea más legible y compacto.

this Lexical: Una de las ventajas más significativas es que las funciones flecha capturan el valor de this del contexto circundante. Esto puede ser útil en situaciones donde deseas evitar problemas comunes con this que pueden ocurrir al utilizar funciones declarativas como métodos.

Desventajas:

No tienen su propio this: El valor de this en las funciones flecha está ligado al contexto en el que se definen. Esto significa que no tienen su propio valor de this, lo cual podría ser una desventaja si necesitas acceder al this de la instancia de la clase.

No pueden ser utilizadas como constructoras: Las funciones flecha no pueden utilizarse con la palabra clave new para crear instancias de clases. Esto limita su uso en situaciones donde necesitas crear nuevos objetos a partir de una clase.

Falta de contexto dinámico: Dado que el valor de this en las funciones flecha es estático y basado en el contexto de definición, puede haber casos en los que necesitas tener un comportamiento dinámico basado en el contexto de llamada.

En resumen, puedes utilizar funciones flecha como métodos de clases si comprendes las implicaciones de su comportamiento con respecto a this. Son útiles cuando deseas mantener el valor de this consistente y evitar problemas potenciales. Sin embargo, si necesitas acceder al this de la instancia de la clase o si planeas utilizar la palabra clave new, es posible que las funciones declarativas sean una opción más adecuada. La elección dependerá de tus necesidades específicas y del diseño de tu código.
*/

/*
-- QA
puedes darme un poco mas detalles y ejemplos sobre como se utiliza el this con las funciones arrow

¡Por supuesto! El manejo de this en las funciones flecha es una característica clave que diferencia a las funciones flecha de las funciones declarativas en JavaScript. Aquí tienes más detalles y ejemplos sobre cómo funciona el this con las funciones flecha:

En una función flecha, el valor de this se basa en el contexto léxico, es decir, en el ámbito en el que se define la función. Esto significa que this en una función flecha no cambia según cómo se llame la función; siempre se refiere al valor de this del contexto circundante.

Ejemplo 1: Contexto de Objeto
*/

const person1 = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // "this" se refiere al contexto circundante (global)
    }
};

person1.greet(); // Outputs: Hello, my name is undefined

// Ejemplo 2: Contexto de Función
function outerFunction() {
    const innerArrow = () => {
        console.log(this); // "this" se refiere al contexto de "outerFunction"
    };

    innerArrow();
}

outerFunction(); // Outputs: Window { ... } o el objeto global en el navegador

// Ejemplo 3: Uso en Clases
class MyClass {
    constructor() {
        this.name = "MyClass";
    }

    sayName = () => {
        console.log(`My name is ${this.name}`); // "this" se refiere a la instancia de MyClass
    };
}

const instance = new MyClass();

instance.sayName(); // Outputs: My name is MyClass

/*
En este último ejemplo, las funciones flecha son particularmente útiles en el contexto de las clases. Como puedes ver, el this en la función flecha sayName se refiere a la instancia de la clase MyClass. Esto es beneficioso porque evita los problemas comunes de contexto con this que podrías encontrar si utilizas funciones declarativas como métodos de clase.

En resumen, las funciones flecha en JavaScript tienen un manejo especial de this, que es heredado del contexto léxico en el que se definen. Esto puede hacer que sean convenientes en situaciones donde deseas mantener un valor de this consistente o evitar problemas con el valor de this en funciones dentro de funciones. Sin embargo, debes tener en cuenta que esta característica puede no ser adecuada en todas las situaciones, especialmente cuando necesitas el contexto dinámico que ofrecen las funciones declarativas.
*/