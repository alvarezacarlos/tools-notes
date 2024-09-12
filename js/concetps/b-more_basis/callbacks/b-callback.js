const https = require("https");

// Función que realiza una solicitud HTTP asíncrona
function fetchData(callback) {
  https
    .get("https://jsonplaceholder.typicode.com/posts", (response) => {
      let data = "";

      // Recibe los datos en fragmentos
      response.on("data", (chunk) => {
        data += chunk;
      });

      // Una vez que se completan los datos, llama al callback con los datos recuperados
      response.on("end", () => {
        callback(null, data);
      });
    })
    .on("error", (error) => {
      callback(error, null); // Manejo de errores
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
