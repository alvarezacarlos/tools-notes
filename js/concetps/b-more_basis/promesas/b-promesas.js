// Creamos una función que devuelve una promesa
function myPromise() {
  return new Promise((resolve, reject) => {
    // Simulamos una operación asíncrona que tarda un tiempo en completarse
    setTimeout(() => {
      // Simulamos que la operación se completa con éxito
      if (4 > 5) {
        resolve("La promesa ha sido resulta y los datos recuperados."); // Resolvemos la promesa con un valor aleatorio
      } else {
        reject(
          "Error: La promesa ha sido resulta y los datos NO han sido recuperados."
        ); // Rechazamos la promesa con un mensaje de error
      }
    }, 2000); // Esperamos 2 segundos antes de resolver la promesa
  });
}

// Utilizamos la promesa creada
console.log("Iniciando la promesa...");
myPromise()
  .then((promiseResult) => {
    console.log(promiseResult);
  })
  .catch((promiseResult) => {
    console.error(promiseResult);
  });
