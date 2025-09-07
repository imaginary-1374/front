window.onload = function() {
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1_000_00); // 100000
console.log(10 ** 5); // 100000
console.log(10 ** 3 * 10 ** 2); // 100000
console.log(7e4 + 3e4); // 100000
console.log(5_000_0 + 5_000_0); // 100000
console.log(); // 100000
console.log(); // 100000

console.log(Number.MIN_SAFE_INTEGER * -1); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER /Number.MAX_SAFE_INTEGER * 16); // 16

let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.min(Math.trunc(flt),Math.ceil(flt))); // 10
console.log(Math.max(Math.trunc(flt),Math.round(flt))); // 10

console.log(Math.floor(Math.random() * 5 ))
}