// class Employee {
//   constructor(id, name, designation, salary) {
//     this.id = id;
//     this.name = name;
//     this.designation = designation;
//     this.salary = salary;
//   }

//   Display() {
//     console.log(this.id);
//     console.log(this.name);
//     console.log(this.designation);
//     console.log(this.salary);
//   }
// }

// var emp = new Employee(2, "Mark", "Manager", 90000);
// emp.Display();

class Car {
  constructor(brand, color, seats, price) {
    this.brand = brand;
    this.color = color;
    this.seats = seats;
    this.price = price;
  }

  Display() {
    console.log(`I bought ${this.brand} car`);
    console.log(`It is of ${this.color} color`);
    console.log(`It has ${this.seats} seats`);
    console.log(`Its price is $${this.price}`);
  }
}

class LuxuryCar extends Car {
  constructor(brand, color, seats, price, openRoof) {
    super(brand, color, seats, price);
    this.openRoof = openRoof;
  }

//   We can also inherit from the parent class as like in JavaScript before Es6 as:
// __proto__ : Car;

  Display() {
    super.Display();
    console.log(`We ${this.openRoof} open the roof of my car`);
  }
}

var car = new LuxuryCar("Ferrari", "Red", 5, 2000000, "can");
car.Display();
