const obj = {
  _value: 42,
  get value() {
    console.log('Getter ejecutado');
    return this._value;
  }
};

console.log(obj.value);  // Esto ejecuta el getter y muestra "Getter ejecutado" seguido de 42


console.log(obj)


// ------ 

const obj2 = {
  _value: 42,
  get value() {
    console.log('Getter ejecutado');
    return this._value;
  }
};

// Acceder al valor para ver el mensaje del getter
console.log(obj2.value);  // Esto ejecuta el getter y muestra "Getter ejecutado" seguido de 42

// Obtener y mostrar el PropertyDescriptor
const descriptor = Object.getOwnPropertyDescriptor(obj2, 'value');
console.log(descriptor);