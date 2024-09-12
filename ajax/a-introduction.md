Tecnicas o Metodologia AJAX 
--
Definition
    - It is a set of web development techniques that involve using a combination of technologies, primarily JavaScript and XML (though JSON is more commonly used nowadays), to create dynamic and interactive web applications.
    - AJAX allows web pages to retrieve and send data to a server asynchronously without needing to refresh the entire page. This enables developers to create more responsive and user-friendly web applications by updating specific parts of a page without requiring a full page reload.

--
Characteristics
    - Asynchronous JavaScript And XML
    - It uses the browser built-in XMLHttpRequest object (to request data from a web server) and uses JavaScript and HTML DOM (to display or use the data)
    - AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
    - AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


Read data from a web server - after the page has loaded
Update a web page without reloading the page
Send data to a web server - in the background



--
How AJAX Works
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

--
Modern Browsers (Fetch API)
    - Modern Browsers can use Fetch API instead of the XMLHttpRequest Object.
    - The Fetch API interface allows web browser to make HTTP requests to web servers.
    - If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.


-- Llamada AJAX
    Una llamada AJAX (Asynchronous JavaScript and XML) es una técnica que permite a una página web comunicarse con un servidor en segundo plano, sin necesidad de recargar toda la página. Esto permite cargar y mostrar datos nuevos o actualizados en una página web de manera dinámica y sin interrumpir la experiencia del usuario.

    Es una técnica que utiliza varias tecnologías, como JavaScript y posiblemente XML o JSON, para lograr comunicaciones asíncronas entre el cliente y el servidor en aplicaciones web.
    
    Aquí tienes los pasos básicos de cómo funciona una llamada AJAX:
        - Creación del objeto XMLHttpRequest: En JavaScript, se crea un objeto XMLHttpRequest (o en versiones más modernas, se puede utilizar la API fetch).
        - Configuración de la solicitud: Se configuran los detalles de la solicitud, como el método HTTP (GET, POST, etc.), la URL del servidor y los parámetros que se enviarán.
        - Definición de la función de respuesta: Se define una función que se ejecutará cuando la respuesta del servidor sea recibida. Esta función manejará los datos recibidos y actualizará la página en consecuencia.
        - Envío de la solicitud: La solicitud se envía al servidor utilizando el objeto XMLHttpRequest (o la función fetch).
        - Procesamiento de la respuesta: Cuando el servidor responde, la función de respuesta definida previamente se activa. Esta función puede analizar los datos recibidos y realizar acciones en la página web, como actualizar contenido, mostrar mensajes de error, etc.
        - Actualización de la página: Con los datos recibidos del servidor, se puede actualizar la página web dinámicamente sin necesidad de recargarla por completo. Esto podría implicar actualizar ciertos elementos HTML, mostrar nueva información o realizar cambios visuales.
        - Manejo de errores: Se debe implementar un manejo adecuado de errores para manejar situaciones en las que la llamada AJAX no sea exitosa, como problemas de red, errores en el servidor, etc.

En resumen, una llamada AJAX es una forma de realizar solicitudes y recibir respuestas desde un servidor en segundo plano sin tener que recargar toda la página web. Esto permite crear aplicaciones web más interactivas y dinámicas al cargar y mostrar datos en tiempo real. Aunque el término "XML" está en el nombre, hoy en día es más común utilizar JSON en lugar de XML para el intercambio de datos debido a su simplicidad y eficiencia.