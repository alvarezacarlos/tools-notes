This is a JSON string:

'["Ford", "BMW", "Fiat"]'
Inside the JSON string there is a JSON array literal:

["Ford", "BMW", "Fiat"]
Arrays in JSON are almost the same as arrays in JavaScript.

In JSON, array values must be of type string, number, object, array, boolean or null.

In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.


----
JavaScript Arrays

You can create a JavaScript array from a literal:

    Example
    myArray = ["Ford", "BMW", "Fiat"];
    You can create a JavaScript array by parsing a JSON string:

    Example
    myJSON = '["Ford", "BMW", "Fiat"]';
    myArray = JSON.parse(myJSON);


Accessing Array Values
You access array values by index:

    Example
    myArray[0];


Arrays in Objects
 Objects can contain arrays:

    Example
    {
    "name":"John",
    "age":30,
    "cars":["Ford", "BMW", "Fiat"]
    }

You access array values by index:
    Example
    myObj.cars[0];


Looping Through an Array
You can access array values by using a for in loop:
    Example
    for (let i in myObj.cars) {
    x += myObj.cars[i];
    }
    Or you can use a for loop:

    Example
    for (let i = 0; i < myObj.cars.length; i++) {
    x += myObj.cars[i];
    }
