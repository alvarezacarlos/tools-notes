// -------- properties decorators
// target refers to the constructor
function LogSample1(target: any, propertyName: string | symbol){
  console.log('Property Decorator')
  console.log('Target', target)
  console.log('Property Name', propertyName)
}

class ProductSample1 {
  @LogSample1  // this logger is executed when the class definition is refistered by JS, NOT when the class is intantiated.
  title: string
  private _price: number

  constructor(t: string, p: number){
    this.title = t    
    this._price = p
  }

  set price(val: number){
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - it must be possitive')
    }
  }

  getPriceWithTax(tax: number){
    return this.price * (1 +  tax)
  }
}



// -------- accessors, parameters and methods decorators
// property decorator
// target refers to the constructor
function LogSample2(target: any, propertyName: string | symbol){
  console.log('Property Decorator')
  console.log('Target', target)
  console.log('Property Name', propertyName)
}

// accesor get/set decorator
function Log2Sample2(target: any, name: string, descriptor: PropertyDescriptor){  //PropertyDescriptor is a type billed in typescript.
  console.log('Accessor Decorator')
  console.log('Target', target)
  console.log('Name', name)
  console.log('Descriptor', descriptor)
}

// method decorator
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
  console.log('Method Decorator')
  console.log('Target', target)
  console.log('Name', name)
  console.log('Descriptor', descriptor)
}

// parameter decorator
//  name is the method name in which the parameter is used and not the the parameter name
function Log4(target: any, name: string | Symbol, position: number){
  console.log('Parameter Decorator')
  console.log('Target', target)
  console.log('Name', name)
  console.log('Position', position)
}

class ProductSample2 {
  @LogSample2  // this logger is executed when the class definition is refistered by JS, NOT when the class is intantiated.
  title: string
  private _price: number

  constructor(t: string, p: number){
    this.title = t    
    this._price = p
  }

  @Log2Sample2
  set price(val: number){
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('Invalid price - it must be possitive')
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number){
    return this.price * (1 +  tax)
  }
}