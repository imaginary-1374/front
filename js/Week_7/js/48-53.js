let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end;i+=start){
    if (i === exclude) continue;
    console.log(i);
}
//_______________________________________________________________________________//
end = 0;
let stop = 3;
for (let i = start; i >= stop ; i--){

    if (i<10)console.log(`0${i}`)

    else console.log(`${i}`)
}
//_______________________________________________________________________________//
    start = 1;
    end = 6;
let breaker = 2;
for (let i = start;;i++) {
console.log(`${i} \n-- ${breaker} \n-- ${end-breaker} `)
if (i==end) break;
}
//_______________________________________________________________________________//
let index = 10;
let jump = 2;

for (;;) {
    let i = index;
    if (i== jump) break;
    console.log(i)
    index-=jump;
}
//_______________________________________________________________________________//
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let num = friends.length - friends.length;

for (let j = friends.length - friends.length; j < friends.length; j++){
    if (friends[j][letter.length - letter.length] === letter.toUpperCase()) {
        continue;
    }
        num++;
    console.log(`"${num} => ${friends[j]}"`)
}
//_______________________________________________________________________________//
    start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}
console.log(swappedName);
console.log(result);
//_______________________________________________________________________________//
    start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = 0; i < mix.length; ) {
    ++i
    if (typeof(mix[i]) != 'number') continue;
    console.log(mix[i]);
}
