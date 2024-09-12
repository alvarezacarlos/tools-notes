const v8 = require('v8')

let name
console.log(name)
let nameAddress = v8.serialize(name).toString('hex');
console.log(nameAddress)


let age = null
console.log(age)
let ageAddress = v8.serialize(age).toString('hex');
console.log(ageAddress)