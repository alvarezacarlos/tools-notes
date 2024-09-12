// Función que realiza una solicitud HTTP y devuelve una promesa
function fetchData(url) {
  return fetch(url)
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      // Devuelve la respuesta como texto
      return response.text();
    });
}

// Ejemplo de uso de la función fetchData con una URL
fetchData('https://jsonplaceholder.typicode.com/posts')
  .then((data) => {
    const jsonData = JSON.parse(data);
    jsonData.forEach(element => {
      console.log(element);
    });
  })
  .catch((error) => {
    console.error('Error al realizar la solicitud:', error);
  });
