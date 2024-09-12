/** JS TYPES
 * number
 * string
 * boolean
 * object
 * array
 */
/** TS TYPES
 * tuple
 * enums
 * any
 * union type
 * literal type
 * type Aliases / Custom Types
 */
// ****** type casting
function add(n1, n2) {
    return n1 + n2;
}
// typscript type inference (const result: number)
var result = add(2, 4);
console.log(result);
// ****** objects
var person = {
    name: 'Carlos',
    age: 27
};
console.log(person);
// ****** array 
var person2 = {
    name: 'Carlos',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
};
var activities;
activities = ['Sports'];
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// ****** tuple 
var person3 = {
    name: 'Carlos',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person3.role.push('admin')
// person3.role[1] = 8
// person3.role = [0, 'admin', 'user']
person3.role = [0, 'admin'];
// ****** enums (human readable identifiers)
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person4 = {
    name: 'Carlos',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    // role: 'READ-ONLY-USER'
    // role: ADMIN
    role: Role.ADMIN
};
// if (person4.role === 'READ-ONLY_User') 
// if (person4.role === ADMIN) {
//   console.log('admin')
// }
if (person4.role === Role.ADMIN) {
    console.log('admin');
}
// ****** any
var myAnyVar;
var myAnyArray; // avoid whenever possible
// ****** union type
function add1(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = add1(30, 60);
console.log("combinedAges", combinedAges);
var combineNames = add1(30, "Carlos");
console.log("combineNames", combineNames);
// ****** Literal type
var numberX = 2.5;
var colors = {};
function addColor(color) {
    colors[color] = color;
}
// addColor('yellow')
addColor('blue');
console.log(colors);
var colorsY = {};
function addColorY(color) {
    colorsY[color] = color;
}
// addColorY('yellow')
addColorY('blue');
console.log(colorsY);
var myUserX = { name: 'Max', age: 30 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet(myUserX);
isOlder(myUserX, 18);
