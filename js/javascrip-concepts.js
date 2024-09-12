/*
-- generales
created on 1993
Brenden Eich
NetScape

Javascript was designed as an easy to use high level language to help developers make website more interactive.
Ecma Script is the Javascript standard implementation.
we can run js on almost all browsers and on a server thanks to nodejs , deno
It is an scripting language, meaning that we can run js code on the fly by using iven the browser console since js is interpreted line by line.
V8 Engine is an engine under the hood of a browser that makes JS run fast by taking the code and convertingig to machine code with a process called Just In Time compilation.

-- variables: let, var, const 
javascript is a dinamucally typed language. which means no data type annotations are necesary. 


7 primitive  data types built in to the Javscript
string
number
bigint
boolean
undefined
symbol
null
*/

let name; //variable can or not be unassigned.
let age = 5;
let contry = null; //we can also assign a null value to the variable and later reasign the variable.

/*
Any value that is not a primitive will inherit from the objet class.  

-- lexical environment determines where variables work and where they don't based on the scope.

-- scopes
global scopes vs local scopes
variables can be in the global scope, funcionts scopes or any other control structure scope like if, etc.

-- functions
functions are objects which means they can be also used as expresion , high-order function, function closure and not only as functions statements

----funcion statement
function add(a, b){
    return a + b;
}

----function expresion 
const add = function(a, b) {
    return a + b;
}*/

// ---- high-order functions 
// ------ functions as arguments
function higherOrder(fun){
    fun();
}

// ------ functions as return a returned value
function higherOrder(){
    retur function (){
        return 'Hello';
    }
}

// ------ functions can be nested to create a clouse that encapsulate data and logic from the rest of the program
function giveMeClosure() {
    let a = 10;
    return function(){
        a++;
        return a;
    }
}

// -------- CALL STACK Memory vs Heap Memory
// Normally when you call a function that a variable with a primitive value it is stored on a CALL STACK Memory which is the browser shorter memory
// example: 
function giveMeClosure(){
    let a = 10;
}

// however when you do a closure the inner function can still access variables in the outter function even after the initial function call. That happens because JS automatically store the data in the outter function in the HEAP Memory which will persist between function calls. 
example:
function giveMeClosure() {
    let a = 10;
    return function(){
        a++;
        return a;
    }
}

// -- this and bind method.
// it is a key word that references an object bases on how a function is called. When called from the global scope it references the windows object in the browser. example: 
function wtfIsThis(){
    console.log(this);
}   
// However if that same function is attached to an object and called by that object, this will be a reference to that object and you can manually bind function to other objects using the bind method
// example: 


const person = {
    wtfIsThis: function() {
        consle.log(this)
    }
}

const personFun = wtfIsThis.bind(person)


// -- arrow functions
// arrow functions do not have their own this value and they are always anonymous which makes them ideal for function expressions

// -- passing values to functions
// when passing an primitive arguments to a function, they are passed by value which means its copy is created of the original variable.
// When passing object on the other side, it is stored in the heap and it is passed by reference, that means multiple parts of the code might be mutating the same object. 


// -- Objects
// ways to define objects:
// --- with the object little syntax
const human = {

}
/*
--- object constructor
we can also create  object using the Objet constructor ans the new key word.
const human = new Object();

// ---- obect characteristics
An object contains a collection of key value pairs: properties and values
Objects can inherit properties from each others thanks to a mechanism called the Prototype Chain. Every object has a private property that link to exactly one prototype. This differs from class-based inheritance found in many other languages because we are dealing with real objects that take out memory opposed to abstract classes in your code. 
What is confusing is JS supports OOP with a class keyword. 

-- classes
classes are just syntactic sugar for prototypal inheritance and objects. 
a class can define a Constructor which is a function that is called when an object is first created. 
It can have properties and optionally create getters and setters to acces them and more easily encapsulates functiones by organizing them as methods on an object instance or making a global to the class name with the static keyword.

-- data structures
In addition to objects has a bunch of built-in data structures:
--- array
holds a dynamic collection of indexed items:
const list = ['foo', 'bar', 'ufo']
--- set 
holds a collection of unique items
const uniq = new Set(list)
--- map
holds a key value pairs like an object but can more easily looped over along with a variety of other features now that you should also know at this point 
const dict = new Map([
    ['foo', 1],
    ['bar', 2]
])


-- Garbage collection
Java script is a garbage collected which means it will automatically deallocate objects from memory when they are no longer referenced in your code. However when you have a map all the properties will always be referenced, if that is not optimal there is a weak map.

-- WeakMap
this containes properties that canbe garbage collector to reduce memory usage.
const weakDict = new WeakMap([
    []
])

--------------------------------------------syncronous vs asyncronous
--- Non-Blocking event loop
normally write code in a script it is executed synchronously line by line which means the nextt line can't start untill the first prevous one finishes. However with an event loop we can right asyncronous code that runs on a separate THREAD POOL while the rest of he application continues to execute.

That is important because modern website often have multiple things going on at the same time but they only have access to one single thread for computing called the main thread. Without asyncronous code it will be imposible to multi-task. 


-- callback function
this is called a callback function because it gets some queue in the event loop to be called back later when it is ready to execute. 
call back are very common but when they are over used it become to deeply nested, it leads to a situation called callback hell, luckly there better ways to write async code like a promise
setTimeout(() => {
    console.log('5 seconds')
}, 5000)

const futureFunction = () => setTimeout(() => {
  console.log("5 seconds");
}, 5000);

const sayHi = () => {
  console.log("Hello");
};

futureFunction();
sayHi();


-- promise
promise is a wrapper for a value that is unknown right now but will result to a value in the future. like maybe a call to a third party API that will resolve to some data. If something goes wrong the promise can reject to raise an error.
const myPromise = new Promise(
    (resolve, reject) => {
        if(success){
            resolve('success')
        }
        else{
            reject('failure')
        }
    }
)

-- promise consumers
the consumer of a promise can use methods like then/catch to handle this two possible outputs
.then(response => console.log('yay!', response))
.catch(response => console.log(success))

-- async functions 
an async funtcion will automatically return a promise. then in the body of the functino we can paused its execution using the await keyword to wait for other promises. This result in a nice readable code:
async function myAsyncFuntion () {
    try{
        const result = await promise;
    }
    catch(error){
        
    }

}

-- modules
--- default export
modules are usde to share code between files. By default all the code in that module is private to that file. however if there is a code that you want fo use elsewhere like a function you can make it default export
export default function helper(){}

so we can import it in a different file: 
import helper from './help.js'

--- export multiple values
it is also possible to export multiple values from a single file. 
export const a = 1;
export const b = 1;
export const c = 1;

import them in the other files
import {a, b, c} from './help.js'



-- react 
-- module bundler 
vim, webpack
this bundlres are in charge to bundle all the react js files into one js file that can be handeled by the browser


-- browser dev tools network waterfall

-- lazybundle and dynamic imports

-- nodejs

-- electron
conbined nodejs with the browser to create full stack desktop apps with js

-- React Native - IOs and android apps

-- typescript  | ESLINT
these do an static analysis to improve your code quality.
*/