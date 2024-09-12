/*
Claro, permíteme explicarte con más detalle cómo los símbolos son útiles para evitar colisiones de nombres y garantizar la integridad de los objetos en JavaScript.

Evitar colisiones de nombres: Cuando trabajamos con objetos en JavaScript, es común que necesitemos agregar propiedades a esos objetos. Sin embargo, existe el riesgo de que se produzcan colisiones de nombres si dos propiedades tienen el mismo nombre. Esto puede ocurrir especialmente en grandes aplicaciones donde múltiples módulos o bibliotecas comparten el mismo espacio de nombres. Los símbolos ofrecen una solución a este problema al proporcionar identificadores únicos para las propiedades de los objetos. Al utilizar símbolos como claves de propiedades, podemos estar seguros de que no habrá colisiones de nombres, ya que cada símbolo creado es único.
*/


const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

const obj = {};

obj[symbol1] = 'Valor 1';
obj[symbol2] = 'Valor 2';

console.log(obj[symbol1]); // 'Valor 1'
console.log(obj[symbol2]); // 'Valor 2'

/*
Garantizar la integridad de los objetos: Los símbolos también se utilizan para crear propiedades "privadas" en objetos. Aunque JavaScript no tiene soporte nativo para propiedades privadas, podemos simularlas utilizando símbolos. Al crear una propiedad con un símbolo como clave, esa propiedad no será accesible directamente desde fuera del objeto, lo que garantiza su integridad y evita que sea modificada accidentalmente.
*/

const myPrivateSymbol = Symbol('privado');

const obj = {
  [myPrivateSymbol]: 'Soy una propiedad privada'
};

console.log(obj[myPrivateSymbol]); // 'Soy una propiedad privada'
console.log(obj); // No muestra la propiedad privada en la consola

/*
Estos son solo algunos ejemplos de cómo los símbolos en JavaScript son útiles para evitar colisiones de nombres y garantizar la integridad de los objetos. Al utilizar símbolos como identificadores únicos para las propiedades de los objetos, podemos escribir código más robusto y modular, reduciendo el riesgo de errores y conflictos de nombres.
*/