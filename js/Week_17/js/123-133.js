// Needed Output
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
// مش عارف هو عايزني اعمل ايه الصراحة بالظبط
// Set(3) {10, 20, 2}
// 2
//________________________________________________________________________________________________//
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));
//________________________________________________________________________________________________//
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
const{username,role,country} = myInfo;
let map = new Map([["username", username], ["role", role], ["country", country]]);
//حاسس اني مسقط حاجة مش د الطريقة اللي المفروض اعمل بيها الماب
console.log(map);
console.log(map.size);
console.log(map.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
//________________________________________________________________________________________________//
let theNumber = 100020003000;
console.log(...(new Set(Array.from(theNumber.toString()).filter(n => n != false).map(num => +num))));
//حاسس اني مسقط حاجة مش د الطريقة اللي المفروض احل بيها🤡
//________________________________________________________________________________________________//
let theName = "Elzero";
console.log(...theName);
console.log(Array.from(theName));
console.log(theName.split(''));
//________________________________________________________________________________________________//
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// chars = ["Z", "Y", "A", "D", "E", 10, 1];

let letters = chars.filter(l => typeof l == 'string');
let num = chars.filter(n => typeof n == 'number');
chars = [...num, ...letters];
console.log(chars);

let s = 0 , e = 0;
chars.forEach(i => typeof(i) == 'number'? s++: e++);

chars.copyWithin(0,s,s-e);

console.log(chars);
