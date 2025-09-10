let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(`${myFriends}`); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(`${myFriends}`); // ["Ahmed", "Elham", "Osama"];
//_________________________________________________________________________//
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]
//_________________________________________________________________________//
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = (arrOne.concat(arrTwo)).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//_________________________________________________________________________//
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase());
//_________________________________________________________________________//
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.indexOf(needle)) {
    console.log('found');
}
if (haystack.indexOf("JS") != -1) {
  console.log("Found");
}
if (haystack.includes("JS")) {
  console.log("Found");
}
//_________________________________________________________________________//
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// arr1.shift();
// arr2.shift();
// arr1.shift();
// arr2.shift();
// console.log(arr1);
// console.log(arr2);
// allArrs = (arr1.concat(arr2)).sort().join("").toLowerCase();

// Your Code Here
let x = arr1.pop();
let y = arr2.pop();
let f = arr2.pop();
allArrs = (f + x + y).toLowerCase();
console.log(allArrs); // fxy
