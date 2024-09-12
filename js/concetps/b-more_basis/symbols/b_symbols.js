
/*
Claro, aquí tienes algunos ejemplos de cómo los desarrolladores utilizan los símbolos en JavaScript:

Propiedades de objeto únicas: Los símbolos se utilizan comúnmente como claves de propiedades de objetos para garantizar que las propiedades no colisionen con otras propiedades existentes o futuras. Por ejemplo:
*/

const mySymbol = Symbol();

const obj = {
  [mySymbol]: 'Valor único'
};

console.log(obj[mySymbol]); // 'Valor único'
/*
Propiedades de objetos privadas: Los símbolos también se utilizan para simular propiedades privadas en objetos. Debido a que los símbolos no se enumeran, las propiedades de objeto definidas con símbolos no son accesibles desde fuera del objeto. Por ejemplo:
*/

const mySymbol = Symbol();
const obj = {};

obj[mySymbol] = 'Propiedad privada';

console.log(obj[mySymbol]); // 'Propiedad privada'

/*
Iteradores personalizados: Los símbolos también se utilizan para definir iteradores personalizados en objetos, lo que permite a los desarrolladores controlar cómo se recorren y acceden a los elementos de un objeto. Por ejemplo:
*/

const myIterableObj = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterableObj) {
  console.log(value); // 1, 2, 3
}

/*Estos son solo algunos ejemplos de cómo los desarrolladores pueden utilizar símbolos en JavaScript para mejorar la modularidad, la privacidad y el control sobre los objetos y sus propiedades.
*/