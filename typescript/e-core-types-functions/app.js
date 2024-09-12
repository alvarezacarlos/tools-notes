// ****** FUNCTION RETURN TYPES
// return number. TS uses type inference to know the type it returns
// function add(n1: number, n2: number): number
function add(n1, n2) {
    return n1 + n2;
}
// return string. TS uses type inference to know the type it returns
// function add2(n1: number, n2: number): string
function add2(n1, n2) {
    return n1.toString() + n2.toString;
}
// return string. We explicity say the function must return number
function add3(n1, n2) {
    return n1 + n2;
}
// return string. We explicity say the function must return a string
function add4(n1, n2) {
    return n1.toString() + n2.toString;
}
// void return function
function add5(n1, n2) {
    console.log(n1.toString + n2.toString());
}
// undefined return function
function add6(num) {
    console.log(num);
    return;
}
add6(2);
// Note: we do not need to specify the type each function returns
// ****** "Function" keyword as type
// **** ERROR
var combineValues; // this is any
function add7(n1, n2) {
    return n1 + n2;
}
combineValues = add7; // since it is any, we can assign a function and later
// combineValues = 5 // later , a number and that will cause an error when calling it below
var result7 = combineValues(8, 8); // Error: combineValues is not a function
console.log(result7);
// **** Solution1
var combineValues8; // this is now of a Function type
function add8(n1, n2) {
    return n1 + n2;
}
combineValues8 = add8; // we can only assign functions, however this allows to assign any funciton , not speciffically functions that receive 2 arguments with the expected type.
// combineValues8 = 5 // TS  know now that this is wrong, we can't assign other values different than functions
var result8 = combineValues8(8, 8); // Error: combineValues is not a function
// combineValues8 = print // this does not through an error and it should , but we have not specified that to ts, correction in the "solution2"
console.log(result8);
// **** Solution2
var combineValues9; // this is now of a Function type, but of a specific function that receive 2 numbers and return a number, that way we can not assign any with that caracteristics
function add9(n1, n2) {
    return n1 + n2;
}
combineValues9 = add9; // we can only assign functions, however this allows to assign any funciton , not speciffically functions that receive 2 arguments with the expected type.
// combineValues9 = 5 // TS  know now that this is wrong, we can't assign other values different than functions
// combineValues9 = print
var result9 = combineValues9(9, 9); // Error: combineValues is not a function
console.log(result9);
// Other example about function types
function myFunction(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
myFunction(2, 3, function (result) {
    console.log(result);
});
// **** NEVER return type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result10 = generateError('An Error occurred', 5000);
console.log(result10);
