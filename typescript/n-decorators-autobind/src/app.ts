// method decorator
// function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor){
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value
  console.log(descriptor)
  console.log(originalMethod)
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, 
    enumerable: false,
    get(){  // get in the property descriptor of a method/property is executed automatically when calling the method just as we do with the get for a property
      const boundFn = originalMethod.bind(this) // this will always refer to the method who call the decorator
      return boundFn
    }
  }
  return adjDescriptor
}

class Printer {
  message= 'This works'

  @Autobind
  showMessage(){    
    console.log(this.message)
  }
}

const p = new Printer()
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(p), 'showMessage'))

const button = document.querySelector('button')!
// button.addEventListener('click', p.showMessage.bind(p))
button.addEventListener('click', () => {
  p.showMessage()
  console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(p), 'showMessage'))
})
