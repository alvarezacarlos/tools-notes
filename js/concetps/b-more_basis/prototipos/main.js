class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  
  hacerSonido() {
    console.log('Haciendo sonido...');
  }
}

class Mamifero extends Animal {
  constructor(nombre, tipo) {
    super(nombre);
    this.tipo = tipo;
  }
  
  amamantar() {
    console.log('Amamantando...');
  }
}

class Perro extends Mamifero {
  constructor(nombre, raza) {
    super(nombre, 'perro');
    this.raza = raza;
  }
  
  ladrar() {
    console.log('¡Guau!');
  }
}

// Crear una instancia de Perro
let miPerro = new Perro('Max', 'Labrador');

console.log(miPerro)

// Acceder a propiedades y métodos de la cadena de prototipos
miPerro.ladrar(); // ¡Guau!
miPerro.amamantar(); // Amamantando...
miPerro.hacerSonido(); // Haciendo sonido...
