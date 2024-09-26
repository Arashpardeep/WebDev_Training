class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(this.name);
    console.log(this.age);
  }
}

class Persons extends Human {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }

  displayCity() {
    console.log(this.city);
  }
}

const p1 = new Persons('Sam', 'jones', 'Mumbai');
p1.display();
p1.displayCity();
