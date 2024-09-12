async function fetchData() {
  try {
    // Simulamos una pausa artificial de 2 segundos antes de la solicitud HTTP
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.status);
    }

    const data = await response.text();

    const jsonData = JSON.parse(data);
    console.log(typeof jsonData);

    jsonData.forEach((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamamos a fetchData() varias veces
for (let i = 0; i < 3; i++) {
  fetchData();
}

console.log("Todas las solicitudes se han enviado.");

/*
al ejecutar este código, verás que el mensaje "Todas las solicitudes se han enviado." se imprime inmediatamente después de que se inician las llamadas a fetchData(), incluso antes de que se complete la pausa artificial de 2 segundos en cada una de ellas. Esto demuestra que el hilo de ejecución no se bloquea y que el código puede continuar ejecutándose mientras se espera a que se completen las operaciones asincrónicas.
 */