// Función que realiza una solicitud HTTP asíncrona utilizando fetch
function fetchData(callback) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      // Devuelve la respuesta como texto
      return response.text();
    })
    .then((data) => {
      // Llama al callback con los datos recuperados
      callback(null, data);
    })
    .catch((error) => {
      // Manejo de errores
      callback(error, null);
    });
}

// Uso de la función fetchData con un callback
fetchData(function (error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    // console.log('Datos recuperados:', data);
    console.log(typeof data);

    try {
      // Intenta convertir la cadena de datos en un objeto JSON
      const jsonData = JSON.parse(data);
      console.log(typeof jsonData);

      // Si la conversión tiene éxito, jsonData será un objeto o un array
      // Puedes iterarlo e imprimir sus elementos
      jsonData.forEach((item) => {
        console.log(item); // Aquí puedes hacer lo que necesites con cada elemento
      });
    } catch (parseError) {
      console.error("Error al analizar datos JSON:", parseError);
    }
  }
});
