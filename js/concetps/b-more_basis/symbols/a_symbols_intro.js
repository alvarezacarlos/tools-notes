/*
Sí, exactamente. Al llamar la función Symbol(), que es una función global en JavaScript, se crea un valor de tipo Symbol. Ahora, hablemos más acerca de los datos de tipo Symbol:

Únicos e Inmutables: Cada valor de tipo Symbol es único. Esto significa que cada llamada a Symbol() crea un nuevo valor de Symbol que no es igual a ningún otro Symbol. Además, los símbolos son inmutables, lo que significa que una vez creados, no se pueden cambiar.

Sin Descripción Implícita: A diferencia de otros tipos de datos primitivos en JavaScript como cadenas de texto o números, los símbolos no tienen una representación textual implícita. Esto significa que no se muestran automáticamente cuando se convierten a una cadena de texto o se concatenan con otras cadenas.

Propósito Principal: Los símbolos se utilizan principalmente como identificadores únicos para propiedades de objetos. Son útiles para evitar colisiones de nombres y garantizar la integridad de los objetos. Por ejemplo, se pueden utilizar como claves de propiedades de objetos para añadir metadatos o crear propiedades "privadas".

No Iterables: Los símbolos no son iterables, lo que significa que no se pueden recorrer con bucles for...of ni con métodos como forEach(). Esto se debe a que los símbolos no forman parte de la cadena de prototipos de los objetos y, por lo tanto, no se enumeran durante la iteración.

En resumen, los datos de tipo Symbol en JavaScript son valores primitivos únicos e inmutables que se utilizan principalmente como identificadores de propiedades de objetos para evitar colisiones de nombres y garantizar la integridad de los objetos.
*/