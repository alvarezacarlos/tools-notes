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
 * unknown
 * never (this is a type that is return by functions) (e-core-types-functions section)
 * union type
 * literal type
 * type Aliases / Custom Types
 */

// ****** type casting
function add(n1: number, n2: number) {
  return n1 + n2
}

// typscript type inference (const result: number)
const result = add(2, 4)

console.log(result)


// ****** objects
const person: {
  name: string,
  age: number
} = {
  name: 'Carlos',
  age: 27
}

console.log(person)


// ****** array 
const person2 = {
  name: 'Carlos',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
}

let activities: string[];
activities = ['Sports']

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase())
}



// ****** tuple 
const person3 : {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]  // tuple in typescript
  // role: string[] // array
} = {
  name: 'Carlos',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

// person3.role.push('admin')
// person3.role[1] = 8

// person3.role = [0, 'admin', 'user']
person3.role = [0, 'admin']



// ****** enums (human readable identifiers)

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}

const person4 = {
  name: 'Carlos',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  // role: 'READ-ONLY-USER'
  // role: ADMIN
  role: Role.ADMIN
}

// if (person4.role === 'READ-ONLY_User') 

// if (person4.role === ADMIN) {
//   console.log('admin')
// }


if (person4.role === Role.ADMIN) {
  console.log('admin')
}


// ****** any
let myAnyVar: any
let myAnyArray: any[]  // avoid whenever possible


// ****** unknown (unknown at least forces you to do some check, for that it is better than any)
// **** example1 with error
let userInput: unknown
let userName: string

userInput = 5
userInput = 'John'
// userName = userInput //Type 'unknown' is not assignable to type 'string'.ts(2322)

// **** example1 soluction
let userInput1: unknown
let userName1: string

userInput1 = 5
userInput1 = 'John'
if (typeof userInput1 === 'string'){ // TS understand that since we are making an extra check it is ok do the assignment in the if now
  userName1 = userInput1
}

// ****** union type
function add1(n1: number | string, n2: number | string){
  let result
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2
  }else {
    result = n1.toString() + n2.toString()
  }
  return result
}

const combinedAges = add1(30, 60)
console.log("combinedAges", combinedAges)

const combineNames = add1(30, "Carlos")
console.log("combineNames", combineNames)



// ****** Literal type
const numberX = 2.5
const colors = {} 

function addColor (color: 'red' | 'blue' | 'green') {
  colors[color] = color
}

// addColor('yellow')
addColor('blue')

console.log(colors)



//  ****** Types Aliases / Custom Types (it improves the just literal type)
type MyCustomType = 'red' | 'blue' | 'green'

const colorsY = {} 

function addColorY (color: MyCustomType) {
  colorsY[color] = color
}

// addColorY('yellow')
addColorY('blue')

console.log(colorsY)




/**************************** */
// Type Aliases & Object Types
// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

type MyCustomUserType = { name: string; age: number };

const myUserX: MyCustomUserType = { name: 'John', age: 30 }; 

function greet(user: MyCustomUserType) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: MyCustomUserType, checkAge: number) {
  return checkAge > user.age;
}

greet(myUserX)

isOlder(myUserX, 18)