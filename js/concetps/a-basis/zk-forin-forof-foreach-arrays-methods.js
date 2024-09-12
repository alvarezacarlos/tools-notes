//---------- Arrays
// for in
const colorsArray = ['red', 'yellow', 'orange']

console.log(colorsArray)

for(colorArrayItem in colorsArray ){
    console.log(colorArrayItem)
    console.log(colorsArray[colorArrayItem])
    colorsArray[colorArrayItem] = 'black'
}

console.log(colorsArray)

// for of
const namesArray = ['Jhon', 'Mark', 'Peter']

console.log(namesArray)

for(nameArrayItem in namesArray ){
    console.log(nameArrayItem)
    console.log(namesArray[nameArrayItem])
    namesArray[nameArrayItem] = 'Anthony'
}

console.log(namesArray)



//---------- objects
// for in
const personObject =  {
    name: 'Carlos',
    age: 50,
    country: 'China'
}

console.log(personObject)

for(personObjectItem in personObject ){
    console.log(personObjectItem)
    console.log(personObject[personObjectItem])
    personObject[personObjectItem] = 'black'
}

console.log(personObject)

// for of
const carObject = {
    brand: 'Toyota',
    color: 'black'
}

console.log(carObject)

for(carObjectItem in carObject ){
    console.log(carObjectItem)
    console.log(carObject[carObjectItem])
    carObject[carObjectItem] = 'Anthony'
}

console.log(carObject)




/*
-- QA
    why is it necessary for...of , for...in and for...each?
    The different loop constructs for...of, for...in, and forEach serve distinct purposes and are designed to address specific scenarios when iterating over arrays or objects in JavaScript. Each of these loops has its own advantages and use cases, making them necessary to handle different types of iterations effectively.

    for...of Loop:
    The for...of loop is specifically designed for iterating over the values of iterable objects, such as arrays, strings, maps, sets, and more. It provides a clean and concise syntax for looping through elements without needing to manage indexes or keys.

    Use cases:

    When you want to iterate over array elements or values in a predictable order.
    When you want a straightforward loop structure without dealing with indexes.
    for...in Loop:
    The for...in loop is used to iterate over the enumerable properties of an object. It's primarily used for object properties, and it iterates over all properties, including those inherited from the prototype chain.

    Use cases:

    When you want to loop through object properties, including inherited ones.
    When you need to access both property names and their corresponding values.
    forEach Loop:
    The forEach method is a specialized loop method available on arrays. It's used to execute a provided function on each element in an array.

    Use cases:

    When you're working specifically with arrays and want to apply a function to each element.
    When you want to perform an action on each element without manually managing loop counters or indexes.
    These different loop constructs are necessary because JavaScript supports a variety of data structures, and they provide clear and appropriate ways to iterate over those structures based on their properties and characteristics. By having specialized loop constructs, developers can write more readable and maintainable code that accurately reflects their intentions when working with different types of data.


*/