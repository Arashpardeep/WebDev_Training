"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["green"] = 56] = "green";
    color[color["blue"] = 57] = "blue";
    color[color["pink"] = 58] = "pink";
})(color || (color = {}));
console.log(color);
console.log(color.Red); //0
console.log(color.green); //56
console.log(color.blue);
console.log(color.pink);
console.log(color[0]);
console.log(color[57]);
