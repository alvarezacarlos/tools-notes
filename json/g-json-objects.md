JSON Object Literals

This is a JSON string:
'{"name":"John", "age":30, "car":null}'

Inside the JSON string there is a JSON object literal:
{"name":"John", "age":30, "car":null}


Note: 
    - It is a common mistake to call a JSON object literal "a JSON object".
    - JSON cannot be an object. JSON is a string format.
    - The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.


myJSON = '{"name":"John", "age":30, "car":null}';
myObj = JSON.parse(myJSON);


----
Accessing Object Values
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj.name;

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj["name"];


----
Looping an Object

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

let text = "";
for (const x in myObj) {
  text += x + ", ";
}

