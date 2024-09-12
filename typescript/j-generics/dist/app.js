"use strict";
// ****** GENERIC TYPES
// array are examples of generic types
const names1 = []; // const names1: any[]
const names2 = []; // const names2: number[]
const names3 = [];
// ****** GENERIC FUNCTIONS and TYPE CONSTRAINTS
// function merge <T, U> (objectA: T, objectB: U) : T & U   
function merge(objectA, objectB) {
    return Object.assign(Object.assign({}, objectA), objectB);
}
console.log(merge({ name: 'Carlos' }, { age: 25 }));
// const mergedObject = merge({name: 'Carlos'}, {age: 25})
// const mergedObject = merge({name: 'Carlos'}, {age: 25}) as {name: string, age: number}
const mergedObject = merge({ name: 'Carlos' }, { age: 25 });
console.log(mergedObject.name);
console.log(mergedObject.age);
// const mergedObject2 = merge<{country: string}, {age: number, sports: string[]}> ({country: 'USA'}, {age: 25, sports: ['football']})
// const mergedObject2 = merge<{country: string}, {age: number, sports: string[]}> ({country: 'USA'}, 50) // this doesn't work because using the constraint we specify the arguements have to be of object type
const mergedObject2 = merge({ country: 'USA' }, { age: 25, sports: ['football'] });
let valor;
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([10, 4]));
// ****** key of constraint
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Carlos' }, 'name');
// ****** Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Carlos');
textStorage.addItem('John');
textStorage.removeItem('John');
console.log(textStorage);
const numberStorage = new DataStorage();
numberStorage.addItem(4);
numberStorage.addItem(3);
numberStorage.addItem(7);
console.log(numberStorage);
