export {};

enum color {
  Red,
  green = 56,
  blue,
  pink,
}

// enum is a datatype in typescript which is to store constant values
// If we don't give any value, then it starts its value from 0 and then 1, 2, and so on
// If we give some value to any element inside enum, than all the elements after that take the consecutive values next to that defined value

console.log(color);
console.log(color.Red); //0
console.log(color.green); //56
console.log(color.blue); //57
console.log(color.pink); // 58
console.log(color[0]);
console.log(color[57]);
