const https = require('https');

// Función que realiza una solicitud HTTPS y devuelve una promesa
function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      // Escuchamos el evento de 'data' para acumular los datos recibidos
      response.on('data', (chunk) => {
        data += chunk;
      });

      // Escuchamos el evento de 'end' para resolver la promesa cuando se complete la respuesta
      response.on('end', () => {
        resolve(data);
      });

      // Escuchamos el evento de 'error' para rechazar la promesa en caso de error
      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

// Ejemplo de uso de la función fetchData con una URL
fetchData('https://jsonplaceholder.typicode.com/posts')
  .then((data) => {
    const jsonData = JSON.parse(data)
    jsonData.forEach(element => {
      console.log(element)
    });
  })
  .catch((error) => {
    console.error('Error al realizar la solicitud:', error);
  });
