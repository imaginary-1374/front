// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// let [a, b, c, d, e] = myNumbers;
// [a, , , , e] = myNumbers;

// console.log(a * e); // 5
// // ____________________________________________________________________________________//
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// [a, b, c, [d, e, [f ,g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// // ____________________________________________________________________________________//
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// arr1= [arr1[0], arr2[0],arr3[1]]
// // Write Your Destructuring Assignment Here
// let [h, j, k]= arr1;

// console.log(`My Best Friends: ${h}, ${j}, ${k}`);
// // My Best Friends: Shady, Mahmoud, Ahmed
// ____________________________________________________________________________________//
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// const {age: a, working: w, country: c, hobbies: [h1,, h3]} = member

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming
// ____________________________________________________________________________________//
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
const {title: t, developer: d} = game;

const {[Object.keys(game.releases).at(0)]: [u, j]} = game.releases;

const {US: u_price, JAP: j_price} = game.releases["Ark Of Napishtim"];

let [o, a] = [[Object.keys(game.releases)[0]], [Object.keys(game.releases).at(1)]]

const {Origin: or} = game.releases;

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
// ____________________________________________________________________________________//
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let temp = {title, age, available: av, skills: [,sk]} = myFriends.at(chosen-1);
if (av) {
    av = 'Available';
} else {
    av = 'Not Available';
}
// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"


console.log(`"${title}"`);
console.log(`${age}`);
console.log(`"${av}"`);
console.log(`"${sk}"`);
