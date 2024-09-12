A common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.


---
Example - Parsing JSON
    const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
    
    Make sure the text is in JSON format, or else you will get a syntax error.

    Use the JavaScript object in your page:

    Example
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = obj.name;
    </script>

---
Array as JSON
When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

    Example
    const text = '["Ford", "BMW", "Audi", "Fiat"]';
    const myArr = JSON.parse(text);

-------
Exceptions
--
Parsing Dates
Date objects are not allowed in JSON.
If you need to include a date, write it as a string.
You can convert it back into a date object later:
    --
    Example
    Convert a string into a date:

    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);

    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
    Or, you can use the second parameter, of the JSON.parse() function, called reviver.

    The reviver parameter is a function that checks each property, before returning the value.

    --
    Example
    Convert a string into a date, using the reviver function:

    const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    const obj = JSON.parse(text, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }
    });

    document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

----
Parsing Functions
Functions are not allowed in JSON.
If you need to include a function, write it as a string.
You can convert it back into a function later:
    
    --
    Example
    Convert a string into a function:

    const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
    const obj = JSON.parse(text);
    obj.age = eval("(" + obj.age + ")");

    document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
    
    You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.