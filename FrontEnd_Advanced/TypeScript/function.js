"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function display() {
    console.log("Hello");
}
display();
function Add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(Add(2, 3));
function Multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(Multiply(23, 4));
//Anonymous Function
var message = function () {
    console.log("Anonymous method implementation");
};
message();
//Function with Paramter and Return Types
var Sum = function (x, y) {
    return x + y;
};
console.log(Sum(2, 3));
//Optional Parameter
function Greet(greeting, name) {
    return greeting + " " + name + "!";
}
console.log(Greet("Hello", "Steve")); //OK, returns "Hello Steve!"
console.log(Greet("Hi")); // OK, returns "Hi undefined!".
console.log("hellooooo");
//Default Parameter Copy
function Greeting(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
console.log(Greeting("Steve")); //OK, returns "Hello Steve!"
console.log(Greeting("Steve", "Hi")); // OK, returns "Hi Steve!".
console.log(Greeting("Bill"));
// Fat Arrow Function Copy
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
