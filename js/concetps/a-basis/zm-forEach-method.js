// The forEach() method calls a function (a callback function) once for each array element.

const numbers1 = [45, 4, 9, 16, 25];

let txt1 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}

// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself

// The example above uses only the value parameter. It can be rewritten to:

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}


//---------- Arrays
// for in
const colorsArray = ['red', 'yellow', 'orange']

console.log(colorsArray)

const colorsArray1 = [
    ...colorsArray
]

let colorsArray2 = []
colorsArray.forEach(item => {
    // console.log(item)
    item = item + ' ' + 'black'
    console.log(item)
    colorsArray2.push(item)
})

console.log(colorsArray)

console.log(colorsArray1)

console.log(colorsArray2)

console.log([...colorsArray,...colorsArray1,...colorsArray2])