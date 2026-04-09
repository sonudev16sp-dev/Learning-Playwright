console.log("----EX -1 : Basic Inheritance");
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks");
  }
}


let d = new Dog("Rex");
d.speak();
d.bark();
class Cat extends Animal {
    meow() {
        console.log(this.name + " meows");
    }
}
let catty =  new Cat("Whiskers");
catty.speak();
catty.meow();


console.log("----");
console.log("----EX -2 : super() Calls Parent Constructor----");

 class Vehicle {
  constructor(type) {
    this.type = type;
    console.log("Vehicle: " + type);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
    console.log("Brand: " + brand);
  }
}

let c = new Car("Tesla");

console.log("----");
console.log("----EX -3 : Method Overriding — Complete Replace----");
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }
}

let r = new Rectangle(5, 3);
console.log("Area:", r.area());

console.log("----");
console.log("----EX -4: Method Override with super.method()----");

class Base {
  greet() {
    return "Hello";
  }
}

class Child extends Base {
  greet() {
    return super.greet() + " World";
  }
}

console.log(new Child().greet());

console.log("----");
console.log("Exercise 5: instanceof Check---")

class Vehicle1 {}
class Car1 extends Vehicle {}
class Tesla1 extends Car {}

let t = new Tesla1();

console.log(t instanceof Tesla1);
console.log(t instanceof Car1);
console.log(t instanceof Vehicle);
console.log(t instanceof Object);
