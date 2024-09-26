/* 
    class is a blueprint of an object
    object is the instance of a class

    class is a logical concept of an object.

    An object has properties(variables) and methods(functions).

    In JavaScript, there is no concept of class, only we have a syntactic sugar syntax of class in Es6

    javaScript follows OOJS not OOPS -> object oriented javascript system
*/

/* 
    We can create object in JavaScript by:
    1) Object Constructor Syntax
    2) Object Literal Syntax
    3) Using a simple function to create object
    4) Using Constructor Function

*/

// 1) Object Constructor Syntax
// Object consist of properties and methods

// const obj = new Object();
// obj.fname = "sam";
// obj.lname = "jones";
// obj.display = function () {
//   console.log(this.fname);
//   console.log(this.lname);
// };

// 2) Object Literal Syntax

// const person = {
//   fname: "sam",
//   lname: "jones",
//   display: function () {
//     console.log(this.fname);
//     console.log(this.lname);
//   },
// };

// person.display();

// 3) Using a simple function to create object

// function createPerson(fname, lname) {
//   const person = {
//     fname,
//     lname,
//     display: function () {
//       console.log(this.fname);
//       console.log(this.lname);
//     },
//   };
//   return person;
// }

// const person1 = createPerson("Sam", "Jones");
// const person2 = createPerson("Ram", "Sharma");

// person1.display();
// person2.display();

// 4) Using Constructor Function

function CreatePerson(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.display = function () {
    console.log(this.fname);
    console.log(this.lname);
  };
}

// When we use constructor function, we don't need to create or return the object, it is done itself when we call constructor function

const p1 = new CreatePerson("sam", "jones");
const p2 = new CreatePerson("Ram", "Sharma");
const p3 = new CreatePerson("Amit", "Jain");

p1.display();
p2.display();
p3.display();
