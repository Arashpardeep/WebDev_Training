export {}; //This think that first.ts and first.js are same, that's why it is giving error in x, which we can remove writing export{} which means it tells that first.js and first.ts are different modules, so remove the conflict
let x: number = 10; //variable declaration
console.log(x);

let first: number = 123; //number
let second: number = 0x37cf; //hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first); // 123
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
