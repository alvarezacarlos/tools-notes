
// Las funciones flecha (arrow functions) y las funciones declarativas son dos formas de definir funciones en JavaScript, pero tienen algunas diferencias clave en términos de sintaxis, comportamiento y manejo de this. Aquí están las diferencias más destacadas entre estas dos tipos de funciones:

// Sintaxis:

// Funciones Declarativas:
function sum(a, b) {
    return a + b;
}

// Funciones Flecha:
const sum = (a, b) => a + b;

/* 
this y Contexto:
Funciones Declarativas: Tienen su propio valor de this que se determina en el momento en que se llama a la función.
Funciones Flecha: Heredan el valor de this del contexto en el que se encuentran. Esto significa que no tienen su propio valor de this y siempre toman el valor de this del ámbito exterior en el que están definidas.

Uso de arguments:
Funciones Declarativas: Tienen acceso al objeto especial arguments que contiene los argumentos pasados a la función.
Funciones Flecha: No tienen su propio objeto arguments, por lo que si necesitas acceder a los argumentos, debes usar la sintaxis rest (...) en los parámetros.

Retorno Implícito:
Funciones Declarativas: Pueden tener un retorno implícito (sin la palabra clave return) cuando se utiliza una expresión en la función.
Funciones Flecha: Tienen un retorno implícito cuando no se utilizan llaves {} para delimitar el bloque de la función. El valor de esta única expresión se convierte automáticamente en el valor de retorno.

new y prototype:
Funciones Declarativas: Pueden ser utilizadas como funciones constructoras con el uso de new y tener un prototype para crear objetos.
Funciones Flecha: No pueden ser utilizadas con new y no tienen un prototype. Intentar usar new con una función flecha dará lugar a un error.
No tienen hoisting: A diferencia de las funciones declarativas, las funciones flecha no son hoisted (elevadas al principio de su ámbito) y deben ser definidas antes de ser utilizadas.

En resumen, las funciones flecha ofrecen una sintaxis más concisa y tienen un comportamiento específico en términos de manejo de this, lo cual puede ser beneficioso en ciertos escenarios. Las funciones declarativas son más versátiles en // términos de uso de this, tienen acceso a arguments y pueden utilizarse como funciones constructoras. La elección /* 
entre // // ellas depende de las necesidades específicas de tu código y tu preferencia por el manejo de this.
*/