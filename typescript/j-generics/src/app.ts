// ****** GENERIC TYPES
// array are examples of generic types
const names1 = [] // const names1: any[]
const names2: Array<number> = []  // const names2: number[]
const names3: number[] = [] 



// ****** GENERIC FUNCTIONS and TYPE CONSTRAINTS
// function merge <T, U> (objectA: T, objectB: U) : T & U   
function merge <T extends object, U extends object> (objectA: T, objectB: U) {  // function merge<T, U>(objectA: T, objectB: U): T & U
  return {...objectA, ...objectB}
}
console.log(merge({name: 'Carlos'}, {age: 25}))


// const mergedObject = merge({name: 'Carlos'}, {age: 25})
// const mergedObject = merge({name: 'Carlos'}, {age: 25}) as {name: string, age: number}

const mergedObject = merge({name: 'Carlos'}, {age: 25})

console.log(mergedObject.name)
console.log(mergedObject.age)


// const mergedObject2 = merge<{country: string}, {age: number, sports: string[]}> ({country: 'USA'}, {age: 25, sports: ['football']})
// const mergedObject2 = merge<{country: string}, {age: number, sports: string[]}> ({country: 'USA'}, 50) // this doesn't work because using the constraint we specify the arguements have to be of object type
const mergedObject2 = merge<{country: string}, {age: number, sports: string[]}> ({country: 'USA'}, {age: 25, sports: ['football']})




// ***** Another Generic Function
interface Lengthy{
  length: number
}

let valor: Lengthy;

function countAndDescribe<T extends Lengthy> (element: T) : [T, string] {
  let descriptionText  = 'Got no value'

  if (element.length === 1) {
    descriptionText  = 'Got 1 element'
  }else if (element.length > 1){
    descriptionText = `Got ${element.length} elements`
  }
  return [element, descriptionText]
}

console.log(countAndDescribe([10, 4]))



// ****** key of constraint
function extractAndConvert <T extends object, U extends keyof T> (obj: T, key: U) {
  return obj[key]
}
extractAndConvert({name: 'Carlos'}, 'name')


// ****** Generic classes
class DataStorage <T extends string | number | boolean> {
  private data : T[] = []
  addItem (item: T) {
    this.data.push(item)
  }

  removeItem(item: T){
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems(){
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Carlos')
textStorage.addItem('John')
textStorage.removeItem('John')

console.log(textStorage)

const numberStorage = new DataStorage<number>()
numberStorage.addItem(4)
numberStorage.addItem(3)
numberStorage.addItem(7)
console.log(numberStorage)