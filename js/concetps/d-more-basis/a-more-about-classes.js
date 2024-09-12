class Department {
  
  _name

  constructor(n) {
    this._name = n
  }

  // accedores
  get name() {
    console.log('Accediendo a Name')
    return this._name
  }

  sayName(){
    modificarProperty()
    console.log(`Hola mi nombre es: ${this._name}`)
  }
}

const myDep = new Department('HR')

myDep.sayName()

console.log(myDep.name)