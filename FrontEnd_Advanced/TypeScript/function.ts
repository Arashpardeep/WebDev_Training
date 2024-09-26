export {};

function display() {
  console.log("Hello");
}
display();
function Add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(Add(2, 3));

function Multiply(firstNumber: number, secondNumber: number): number {
  return firstNumber * secondNumber;
}
console.log(Multiply(23, 4));

//Anonymous Function
let message = function () {
  console.log("Anonymous method implementation");
};
message();
//Function with Paramter and Return Types
let Sum = function (x: number, y: number): number {
  return x + y;
};
console.log(Sum(2, 3));

//Optional Parameter
function Greet(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}
console.log(Greet("Hello", "Steve")); //OK, returns "Hello Steve!"
console.log(Greet("Hi")); // OK, returns "Hi undefined!".

console.log("hellooooo");

//Default Parameter Copy
function Greeting(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name + "!";
}

console.log(Greeting("Steve")); //OK, returns "Hello Steve!"
console.log(Greeting("Steve", "Hi")); // OK, returns "Hi Steve!".
console.log(Greeting("Bill"));
// Fat Arrow Function Copy
let sum = (x: number, y: number): number => {
  return x + y;
};
console.log(sum(10, 20));
