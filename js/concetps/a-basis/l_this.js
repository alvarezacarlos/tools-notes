/** 
  Además del método call(), que se utiliza para invocar una función con un valor específico de this y argumentos proporcionados individualmente, JavaScript también proporciona otros métodos relacionados que se utilizan de manera similar. Estos métodos son apply() y bind().

  Aquí tienes una descripción de cada uno de ellos y sus diferencias:

  call():
  Utilizado para llamar a una función con un valor específico de this y una lista de argumentos proporcionados individualmente.
  Sintaxis: funcion.call(thisArg, arg1, arg2, ...).
  Útil cuando conoces los argumentos de antemano y los puedes pasar individualmente.

  apply():  
  Similar a call(), pero acepta un array o un objeto de tipo array-like como argumento de la lista de argumentos.
  Sintaxis: funcion.apply(thisArg, [argsArray]).
  Útil cuando los argumentos se encuentran en un array o array-like y necesitas pasarlos todos a la función.
  
  bind():
  Utilizado para crear una nueva función que, cuando es llamada, tiene un valor de this predefinido, y opcionalmente, argumentos predefinidos.
  Sintaxis: nuevaFuncion = funcion.bind(thisArg[, arg1[, arg2[, ...]]]).
  Útil cuando quieres crear una versión de una función con un contexto de this fijo y, posiblemente, algunos argumentos predefinidos.
  
  A diferencia de call() y apply(), bind() no invoca la función de inmediato, sino que devuelve una nueva función con el contexto y los argumentos predefinidos.
  Aquí hay un ejemplo para ilustrar las diferencias:
  Además del método call(), que se utiliza para invocar una función con un valor específico de this y argumentos proporcionados individualmente, JavaScript también proporciona otros métodos relacionados que se utilizan de manera similar. Estos métodos son apply() y bind().

  Aquí tienes una descripción de cada uno de ellos y sus diferencias:

  call():

  Utilizado para llamar a una función con un valor específico de this y una lista de argumentos proporcionados individualmente.
  Sintaxis: funcion.call(thisArg, arg1, arg2, ...).
  Útil cuando conoces los argumentos de antemano y los puedes pasar individualmente.
  apply():

  Similar a call(), pero acepta un array o un objeto de tipo array-like como argumento de la lista de argumentos.
  Sintaxis: funcion.apply(thisArg, [argsArray]).
  Útil cuando los argumentos se encuentran en un array o array-like y necesitas pasarlos todos a la función.
  bind():

  Utilizado para crear una nueva función que, cuando es llamada, tiene un valor de this predefinido, y opcionalmente, argumentos predefinidos.
  Sintaxis: nuevaFuncion = funcion.bind(thisArg[, arg1[, arg2[, ...]]]).
  Útil cuando quieres crear una versión de una función con un contexto de this fijo y, posiblemente, algunos argumentos predefinidos.
  A diferencia de call() y apply(), bind() no invoca la función de inmediato, sino que devuelve una nueva función con el contexto y los argumentos predefinidos.
  Aquí hay un ejemplo para ilustrar las diferencias:

*/


const objeto = {
  nombre: 'Juan',
  saludar: function(mensaje) {
    console.log(`${mensaje}, soy ${this.nombre}.`);
  }
};

const otroObjeto = {
  nombre: 'María'
};

// Utilizando call()
objeto.saludar.call(otroObjeto, 'Hola'); // Salida: "Hola, soy María."

// Utilizando apply()
objeto.saludar.apply(otroObjeto, ['Hola']); // Salida: "Hola, soy María."

// Utilizando bind()
const nuevaFuncion = objeto.saludar.bind(otroObjeto, 'Hola');
nuevaFuncion(); // Salida: "Hola, soy María."


/**
 * En resumen, call() y apply() se utilizan para invocar funciones con un contexto de this y una lista de argumentos, mientras que bind() se utiliza para crear una nueva función con un contexto de this fijo y, opcionalmente, algunos argumentos predefinidos.
 */

/*
What is this?
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

------------------------------------------

The JavaScript this Keyword
Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable. It is a keyword. You cannot change the value of this.
this in a Method
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.

fullName : function() {
  return this.firstName + " " + this.lastName;
}
this Alone
When used alone, this refers to the global object.

Because this is running in the global scope.

In a browser window the global object is [object Window]:

Example
let x = this;
 In strict mode, when used alone, this also refers to the global object:

Example
"use strict";
let x = this;
this in a Function (Default)
In a function, the global object is the default binding for this.

In a browser window the global object is [object Window]:

Example
function myFunction() {
  return this;
}
ADVERTISEMENT

this in a Function (Strict)
JavaScript strict mode does not allow default binding.

So, when used in a function, in strict mode, this is undefined.

Example
"use strict";
function myFunction() {
  return this;
}
this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:

Example
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

Object Method Binding
In these examples, this is the person object:

Example
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};
Example
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
i.e. this.firstName is the firstName property of this (the person object).

Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.

See Also:
The Function call() Method

The Function apply() Method

The Function bind() Method

The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:

Example
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2);

Function Borrowing
With the bind() method, an object can borrow a method from another object.

This example creates 2 objects (person and member).

The member object borrows the fullname method from the person object:

Example
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
This Precedence
To determine which object this refers to; use the following precedence of order.

Precedence	Object
1	bind()
2	apply() and call()
3	Object method
4	Global scope
Is this in a function being called using bind()?

Is this in a function being called using apply()?

Is this in a function being called using call()?

Is this in an object function (method)?

Is this in a function in the global scope.



/* Contexto Lexico
  El contexto léxico se refiere al ámbito en el que se encuentra una función o una variable cuando se define en el código. Este ámbito es determinado por la ubicación física en el código fuente donde se escribe la función o la variable.

  En otras palabras, el contexto léxico describe el entorno en el que una función o una variable son declaradas y define qué variables y funciones están disponibles para ser accedidas dentro de ese entorno. Cuando una función se define dentro de otra función, la función interna tiene acceso al ámbito (contexto léxico) de la función externa, lo que significa que puede acceder a las variables y funciones definidas en la función externa.

  Por ejemplo:

  javascript
  Copy code
  function exterior() {
    const mensaje = 'Hola desde la función exterior';

    function interior() {
      console.log(mensaje); // Accede a la variable mensaje de la función exterior
    }

    interior();
  }

  exterior(); // Resultado: "Hola desde la función exterior"
  En este ejemplo, la función interior se define dentro del cuerpo de la función exterior, por lo que tiene acceso al contexto léxico de la función exterior, incluyendo la variable mensaje.

  El contexto léxico es estático y se determina en el momento en que se define una función o una variable, y no cambia durante la ejecución del programa. Esto significa que las funciones anidadas retienen acceso al contexto léxico en el que fueron definidas, incluso si son invocadas en un contexto diferente.
  */
