/**
 Exacto, después de los callbacks, las promesas se convirtieron en una forma más elegante y manejable de manejar operaciones asíncronas en JavaScript. Una promesa es un objeto que representa el resultado eventual de una operación asíncrona. Te permite escribir código que parezca sincrónico, pero que en realidad es asincrónico detrás de escena.

Una promesa puede estar en uno de tres estados:

1. Pendiente (pending): Cuando se crea una promesa, está en estado pendiente hasta que se cumple o se rechaza.
2. Resuelta (fulfilled): Cuando una promesa se resuelve exitosamente, pasa al estado resuelto. Esto significa que la operación asíncrona se completó con éxito y la promesa tiene un valor resultante.
3. Rechazada (rejected): Si la operación asíncrona falla, la promesa se rechaza. Esto significa que algo salió mal durante la ejecución de la operación y la promesa tiene un motivo de rechazo (generalmente un objeto de error).

Las promesas se crean utilizando el constructor `Promise`, al cual se le pasa una función que toma dos parámetros: `resolve` y `reject`. Dentro de esta función, realizas la operación asíncrona y llamas a `resolve()` si la operación se completa con éxito, o a `reject()` si hay un error.

Puedes encadenar métodos como `then()` y `catch()` a una promesa para manejar su resultado o su error de manera más legible y eficiente. `then()` se ejecuta cuando la promesa se resuelve, y `catch()` se ejecuta cuando la promesa es rechazada.

Las promesas proporcionan una forma más limpia y estructurada de manejar operaciones asíncronas en JavaScript, evitando el problema del "callback hell" que puede ocurrir con los callbacks anidados. */
