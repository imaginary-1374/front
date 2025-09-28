let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipre = /\d{4}:\w+\d:(\d{4})+/;
console.log(ipre.test(ip)); //true
//____________________________________________________________________________________________//
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let spre = /os\d{0,3}o/ig;
// Output
console.log(specialNames.match(spre));
// ['Os10O', 'OsO', 'Os100O']
//____________________________________________________________________________________________//
let phone = "+(995)-123 (4567)";
let phonere = /\W\(\d{3}\)-\d{3}\s\(\d{4}\)/; // /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/
console.log(phonere.test(phone)); //true
//____________________________________________________________________________________________//
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re_1 = /\d*(\/\d*\/|\s-\s\d*\s-\s|\s\d*\s)\d+/; // Write Pattern Here

console.log(date1.match(re_1)); // "25/10/1982"
console.log(date2.match(re_1)); // "25 - 10 - 1982"
console.log(date3.match(re_1)); // "25 10 1982"
console.log(date4.match(re_1)); // "25 10 82"
//____________________________________________________________________________________________//
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(\w+.)?\w+.\w+(:\d+\/\w+.\w+\?\w+\W\d+\W\w+\W\w+)?/i; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));