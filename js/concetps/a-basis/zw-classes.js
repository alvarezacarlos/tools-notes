class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1)
console.log(myCar2)

console.log(myCar1.age())