// JavaScript admite varios tipos de funciones que puedes utilizar según tus necesidades. Algunos de los tipos de funciones más comunes en JavaScript son:

// funciones declarativas:
function sum(a, b) {
  return a + b;
}

// funciones expresadas
const product = function (a, b) {
  return a * b;
};

// funciones fecha (Arrow Functions):
const divide = (a, b) => a / b;

// funciones anónimas:
// Las funciones que no tienen un nombre se llaman funciones anónimas. Se utilizan a menudo como argumentos para otras funciones o en contextos donde no se necesita un nombre explícito.
setTimeout(function () {
  console.log("Ejecutado después de un tiempo");
}, 1000);

// Funciones Callback:
// Las funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una operación se llaman funciones de devolución de llamada (callbacks).
function fetchData(callback) {
  // Hacer algo para obtener datos
  const data = "Datos obtenidos";
  callback(data);
}

fetchData(function (result) {
  console.log(result);
});

// funciones constructoras for OOP:
// Las funciones constructoras se utilizan para crear objetos con propiedades y métodos específicos.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Alice", 25);

// Métodos de Objeto:
// Los métodos de objeto son funciones que están asociadas a objetos y se invocan en el contexto de ese objeto.
const myObject = {
  property: "Valor",
  myMethod: function () {
    console.log(this.property);
  },
};
myObject.myMethod();

// Funciones Recursivas:
// Las funciones recursivas son aquellas que se llaman a sí mismas durante su ejecución.
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Diferencias entre funciones expresadas y funciones flecha
-- sintaxis
Funciones expresadas: Son funciones que se asignan a variables o constantes. Se definen utilizando la sintaxis function, seguida opcionalmente por un nombre de función y paréntesis de parámetros.
Funciones arrow: Son funciones anónimas definidas utilizando la sintaxis () => {}. No tienen un nombre de función propio y pueden ser asignadas a variables o utilizadas directamente en expresiones. 
-- this
Funciones expresadas: El valor de this en una función expresada depende del contexto de ejecución en el que se llama la función. Esto significa que this puede cambiar dinámicamente dependiendo de cómo se invoca la función.
Funciones arrow: Las funciones arrow capturan el valor de this del contexto circundante en el momento en que se definen. Esto significa que el valor de this en una función arrow es fijo y se hereda del contexto en el que se define la función.
-- Arguments
Funciones expresadas: Tienen acceso al objeto arguments, que es un array-like que contiene los argumentos pasados a la función.
Funciones arrow: No tienen su propio objeto arguments, por lo que deben utilizar rest parameters (...args) para recopilar los argumentos.
-- Contexto de invocación:
Funciones expresadas: Tienen su propio contexto de invocación y pueden ser invocadas utilizando el nombre de la variable que las contiene.
Funciones arrow: No tienen su propio contexto de invocación y deben ser invocadas a través de la variable que las contiene, si están asignadas a una.
 */

/**
 * *** This con las funciones expresadas
 * en las funciones expresadas, el this toma el valor dinamicamente dependiendo de como es llamado.
 */
// El valor de this puede cambiar dependiendo del contexto de ejecución en el que se llama la función.
//**** llamada en el contexto de un objeto
const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}.`);
  },
};

persona.saludar(); // Resultado: "Hola, soy Juan."

//**** llamada en una funcion declarativa (no asociada a un objeto)
function saludar() {
  console.log(this);
}

saludar() // this will be the global object (window in node, module context {} in node)

const person = {name: "Jhon"}
saludar.call(person) // utilizando call para pasarle un contexto diferente



/** this en funciones flechas */
const sayHi = () => {
  console.log(this)
}
sayHi()  // en este caso this imprime el objeto global

// this en funciones flechas dentro de un objeto
const human = {
  sayHello: () => {
    console.log(this); 
  },
};
human.sayHello(); // this still will point to the global object
/**
 * las funciones flechas no pueden ser utilizadas con bind, call, repply. ya que ellas no tienen su propio contexto de this.
 * En las funciones flechas this depende del contexto lexico
 */


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