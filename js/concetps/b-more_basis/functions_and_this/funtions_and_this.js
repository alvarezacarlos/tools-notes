// funcion flecha
const person = {
  name: 'Carlos',
  sayHi: function () {
    // console.log(this.name)
    return () => {
      console.log(this.name)
    } 
    // valido .bind(this)
  }
}

person.sayHi()()


// function regular
const person1 = {
  name: 'Carlos',
  sayHi: function () {
    // console.log(this.name)
    return function () {
      console.log(this.name)
    }.bind(this)
  }
}

person1.sayHi()()


// funcion regular option 2
const person2 = {
  name: 'Carlos',
  sayHi: function () {
    // console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
person1.sayHi().bind(person)()



// funcion regular option 3
const person3 = {
  name: 'Carlos',
  sayHi: function () {
    // console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}

const resultFun  = person1.sayHi().bind(person)
resultFun()