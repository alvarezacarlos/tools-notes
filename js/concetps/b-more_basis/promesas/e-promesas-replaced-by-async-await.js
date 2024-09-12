// Ejemplo de uso de la función fetchData con una URL
async function fetchDataExample() {
  try {
    const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
    const jsonData = JSON.parse(data);
    jsonData.forEach(element => {
      console.log(element);
    });
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
  }
}

// Llamada a la función fetchDataExample
fetchDataExample();