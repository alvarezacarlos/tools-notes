// ******  decorator
function Logger(constructor: Function) {
  console.log('Logging...')
  console.log(constructor)
}

@Logger
class Person {
  name = 'Carlos'

  constructor(){
    console.log('Creating person object')
  }
}

const pSample = new Person()


// ******  decorator FACTORY
function LoggerSample2(logString: string) {
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}

@LoggerSample2('LOGGIN - PERSON')
class PersonSample2 {
  name = 'Carlos'

  constructor(){
    console.log('Creating person object')
  }
}

const pSample2 = new PersonSample2()



// ******  Building more useful decorators
function WithTemplateSample3(template: string, hookId: string){
  return function(_:  Function) {  // _ tell that I am aware I am gettint the "constructor" but I will not use it.
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
    }
  }
}

@WithTemplateSample3('<h1>Template Content</h1>', 'app')
class PersonSample3 {
  name = 'Carlos'

  constructor(){
    console.log('Creating person object')
  }
}

const pSample3 = new PersonSample3()


// ******  Building more useful decorators
function WithTemplateSample4(template: string, hookId: string){
  return function(constructor:  any) {  // _ tell that I am aware I am gettint the "constructor" but I will not use it.
    const person = new constructor()
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = person.name
    }
  }
}

@WithTemplateSample4('<h1>Template Content</h1>', 'app')
class PersonSample4 {
  name = 'Carlos'

  constructor(){
    console.log('Creating person object')
  }
}

const pSample4 = new PersonSample4()




// ******  Multiple decorators
function LoggerSample5(logString: string) {
  console.log('Logger One Factory')
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}

function Logger2Sample5(logString: string) {
  console.log('Logger Two Factory')
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplateSample5(template: string, hookId: string){
  console.log('WithTemplateSample5')
  return function(constructor:  any) {  // _ tell that I am aware I am gettint the "constructor" but I will not use it.
    const person = new constructor()
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = person.name
    }
  }
}

@Logger2Sample5('Logger Two')
@LoggerSample5('Logger One')
@WithTemplateSample5('<h1>Template Content</h1>', 'app')
class PersonSample5 {
  name = 'Carlos'

  constructor(){
    console.log('Creating person object')
  }
}

const pSample5 = new PersonSample5()