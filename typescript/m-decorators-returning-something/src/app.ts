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
  return function<T extends {new(...args: any[]) : {name: string}} >(originalContructor:  T) {  // _ tell that I am aware I am gettint the "originalContructor" but I will not use it.   
    // return a new originalContructor function which will replace the old one. So, it will replace the class to which you added the decorator.
    return class extends originalContructor{
      // constructor(...args: any[]){
      constructor(..._: any[]){
        super()
        // const person = new originalContructor()
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
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