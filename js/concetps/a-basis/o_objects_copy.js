/**
The best way to make a copy of an object in JavaScript depends on your specific requirements. Here are some common methods:
Spread syntax (...): This method creates a shallow copy of the object, meaning that nested objects or arrays within the original object are still referenced.
 */

const originalObject1 = { a: 1, b: 2 };
const copiedObject1 = { ...originalObject };


/*
Object.assign(): This method copies all enumerable own properties from one or more source objects to a target object. Like spread syntax, it creates a shallow copy.
 */

const originalObject2 = { a: 1, b: 2 };
const copiedObject2 = Object.assign({}, originalObject);


/*
JSON.stringify() and JSON.parse(): This method creates a deep copy of the object by serializing it to JSON and then parsing it back into a new object. It works for simple objects without functions or circular references.
 */
const originalObject3 = { a: 1, b: 2 };
const copiedObject3 = JSON.parse(JSON.stringify(originalObject));

/*
Custom deep cloning function: For more complex objects, you may need a custom function that recursively clones nested objects and arrays.
 */

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const originalObject = { a: { b: 1 } };
const copiedObject = deepClone(originalObject);


/***** Shadow copy */
const person1 = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const person2 = { ...person1 };

console.log(person1);
console.log(person2);

person1.address.city = 'Santiago'
person1.name = 'Mark Paul'

console.log(person1);
console.log(person2);

