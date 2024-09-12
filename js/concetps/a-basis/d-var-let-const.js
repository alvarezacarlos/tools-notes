const name1 ='Carlos'

function sayName(){
    var name2 = 'Pedro'
    console.log(name2)    
}

function sayName1(){
    if (2 < 3) {
        // let name3 = 'Jhon'
        var name3 = 'Jhon'
    }
    console.log(name3)
}

function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // x es accesible aquí, incluso fuera del bloque if
}

console.log(name1)
// console.log(name2)
sayName()
sayName1()
exampleVar()