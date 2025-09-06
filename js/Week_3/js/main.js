window.onload = function(){
console.log(10 * 20 * 15 * 3 * 190 * 10 % 400); // 0

let num = 3;
// Solution One
console.log(num * num - num); // 6
// Solution Two
console.log(num + num ); // 6
// Soultion Three
console.log(num ** num / num - num); // 6
// Soultion Four
console.log(num / num * num + num ); // 6
// Solution Five
console.log(num / true + num ); // 6
// Solution Six
console.log(num * num / true - num ); // 6

let num_2 = "10";
// Solution One
console.log(+num_2 + +num_2); // 20
// Solution Two
console.log((+num_2 * +num_2) / +num_2 + +num_2); // 20
// Solution Three
console.log((+num_2) ** false  * +num_2 + +num_2); // 20
// Solution Four
console.log(); // 20

let points = 10;
// Write Your Code Here
points += 3;
console.log(points); // 13
// Write Your Code Here
points -= 5;
console.log(points); // 8;
}