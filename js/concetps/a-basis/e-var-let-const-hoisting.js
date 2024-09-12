// El hoisting es un comportamiento en JavaScript por el cual las declaraciones de variables y funciones se "elevan" al principio de su ámbito, es decir, se mueven a la parte superior del ámbito en el que se encuentran antes de que se ejecute el código. Esto significa que puedes hacer referencia a una variable antes de su declaración real en el código, pero su valor será undefined en ese punto.


// Sin embargo, a diferencia de las variables declaradas con var, las variables declaradas con let y const no son inicializadas automáticamente con undefined durante el proceso de hoisting. En cambio, mantienen un estado temporal llamado "temporal dead zone" (zona muerta temporal), durante el cual no se puede acceder a ellas ni utilizarlas antes de su declaración. Esto evita que se produzcan comportamientos inesperados.

console.log(x); // No dará un error, sino que imprimirá "undefined"
var x = 10;

console.log(y); // Dará un error en tiempo de ejecución
let y = 20;

console.log(z); // Dará un error en tiempo de ejecución
const z = 20;




// ------------------------
/**
 * El hosting siempre occurre a nivel del scope o el alcanse que tenga la variables dependiendo de como haya sido declarada: con var , let o const
 * 
 * var 
 * cuando declaramos una variable con var, esta tendra un scope en un ambito global o en un ambito de funcion si esta declarada dentro de una funcion.
 * hosting en var:
 * El hosting elevara la declaracion de la variable al inicio del ambito gobal o al inicio de la fucion e inicializara la variable con undefined. 
 * Esto nos permite referenciar o acceder a la variable pero su valor sera undefined, hasta que el compilador llegue a la linea donde se inicializa la funcion en el codigo, ya que el hosting eleva solo la declaracion mas no la inicializacion en el codigo, encargandose el mismo compilador de inicializarla a undefined hasta llegar a la linea del codigo donde se esta su inicializacion en el codigo.
 * 
 * cuando creamos una funcion expresada con una variable de tipo var , occurre lo mismo, podremos imprimir la variable y nos dara undefined, pero si llamamos esa variable como una funcion antes de su declaracion e inicializacion en el codigo, nos lanzara un error diciendo que esa variable no es una funciones, eso es porque su inicializacion como funcion aun no se ha realizado, mas la declaracion de esa variable si esta accesible y inicializada por el compilador como undefined.
 * 
 * 
 * let y const
 * para let y const , el hosting tambien occurre a nivel de alcance o scope y como el alcance de estas variables declaradas con let y const es a nivel de bloque (for, if, function, etc) entonces la variable tendra un hosting tambien pero solo el inicio del ambito de ese bloque y a diferencia de var, estas variables no se inicializan con undefined, solo se eleva la declaracion pero no se inicializan con undefined. 
 * Esto causara que si intentamos acceder o referenciar esa variable antes de su declaracion en el codigo nos va a dar un error ya que no esta inicializada nisiquiera con undefined.
 *
 * lo mismo sucede para las funciones expresadas con let y const , nisiquiera podemos acceder a ellas antes de su declaracion e inicializacion.
 * 
 * 
 * 
 * explicacion de la diferencia entre var y (let y const) en cuanto a hosting
    La decisión de cómo se comportan las variables en JavaScript, especialmente con respecto al "hoisting" y la inicialización, es el resultado de la evolución del lenguaje y las decisiones de diseño tomadas por los creadores de JavaScript.

    La diferencia en el comportamiento entre var y let/const se introdujo con la llegada de ECMAScript 6 (también conocido como ES6) en 2015. Antes de ES6, JavaScript solo tenía la palabra clave var para declarar variables, y su comportamiento era bastante inconsistente y propenso a errores. La inicialización automática con undefined durante el "hoisting" era una de las fuentes comunes de errores en JavaScript, ya que podía llevar a comportamientos inesperados si se accedía a una variable antes de su asignación.

    Con la introducción de let y const en ES6, se buscó mejorar la consistencia y seguridad del lenguaje. Una de las decisiones clave fue no inicializar automáticamente las variables let y const durante el "hoisting". Esto se hizo para evitar los problemas asociados con var y para fomentar buenas prácticas de programación, como evitar el acceso a variables antes de su asignación.

    En resumen, el cambio en el comportamiento de let y const en comparación con var refleja una evolución en el diseño de JavaScript para hacer el lenguaje más consistente, seguro y propenso a errores.
 */
