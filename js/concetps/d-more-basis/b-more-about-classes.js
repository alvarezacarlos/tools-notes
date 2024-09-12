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


  #employees = []  // private
  constructor(name) {
    this.name = name
  }

  addEmployee(name) {
    this.#employees.push(name)
  }

  printEmployeesInfo(){
    console.log(this.#employees.length)
    console.log(this.#employees)
  }
  
  get getEmployeeLength(){
    return this.#employees.length
  }
}


const accounting = new Department('Accounting')

accounting.addEmployee('Mark')
accounting.addEmployee('Jhon')

// accounting.#employees[2] = 'Laura' // this cause an error because it is private

accounting.printEmployeesInfo()

console.log(accounting.getEmployeeLength)