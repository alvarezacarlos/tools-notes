// Función que realiza una solicitud HTTP asíncrona utilizando fetch con async/await
async function fetchData() {
  try {
    // Realiza la solicitud HTTP utilizando fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    // Devuelve la respuesta como texto
    const data = await response.text();

    // Intenta convertir la cadena de datos en un objeto JSON
    const jsonData = JSON.parse(data);
    console.log(typeof jsonData);

    // Si la conversión tiene éxito, jsonData será un objeto o un array
    // Puedes iterarlo e imprimir sus elementos
    jsonData.forEach((item) => {
      console.log(item); // Aquí puedes hacer lo que necesites con cada elemento
    });
  } catch (error) {
    // Manejo de errores
    console.error("Error:", error);
  }
}

// Llama a la función fetchData con async/await
fetchData();
