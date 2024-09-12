// Función 1
function asyncFunction1(callback) {
  setTimeout(() => {
    console.log('Función 1 completada');
    callback();
  }, 1000);
}

// Función 2
function asyncFunction2(callback) {
  setTimeout(() => {
    console.log('Función 2 completada');
    callback();
  }, 1000);
}

// Función 3
function asyncFunction3(callback) {
  setTimeout(() => {
    console.log('Función 3 completada');
    callback();
  }, 1000);
}

// Ejecutar las funciones en un "callback hell"
asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
      console.log('Todas las funciones han sido completadas');
    });
  });
});


/**
 * En este ejemplo, asyncFunction1, asyncFunction2 y asyncFunction3 son tres funciones asíncronas simuladas que ejecutan una tarea después de un retraso de 1 segundo. Luego, estas funciones se llaman una dentro de la otra, formando un "callback hell". A medida que se agregan más funciones y lógica, el código puede volverse difícil de entender y mantener.
 */