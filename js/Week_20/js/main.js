// assingment 6
// Write Your Generator Function Here
// 140
// 340
// 540
function* gen(){
    let i = 14;
    let j = 140;
    while(true){
        yield i;
        i+=(j);
        j+=200;
    }
}
let generator_1 = gen();

console.log(generator_1.next()); // {value: 14, done: false}
console.log(generator_1.next()); // {value: 154, done: false}
console.log(generator_1.next()); // {value: 494, done: false}
console.log(generator_1.next()); // {value: 1034, done: false}
console.log(generator_1.next()); // {value: 1774, done: false}
console.log(generator_1.next()); // {value: 2714, done: false}
console.log(generator_1.next()); // {value: 3854, done: false}
console.log(generator_1.next()); // {value: 5194, done: false}
console.log(generator_1.next()); // {value: 6734, done: false}
console.log('#'.repeat(40));
// assingment 7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
let set_num = new Set(genNumbers())
let set_letters = new Set(genLetters())

function* genAll(){
    yield* set_num;
    yield* set_letters;
}
let generator_2 = genAll();

console.log(generator_2.next()); // {value: 1, done: false}
console.log(generator_2.next()); // {value: 2, done: false}
console.log(generator_2.next()); // {value: 3, done: false}
console.log(generator_2.next()); // {value: 4, done: false}
console.log(generator_2.next()); // {value: 5, done: false}
console.log(generator_2.next()); // {value: "A", done: false}
console.log(generator_2.next()); // {value: "B", done: false}
console.log(generator_2.next()); // {value: "C", done: false}
console.log(generator_2.next()); // {value: "D", done: false}

console.log('#'.repeat(40));
// assingment 8
import calc from './mod-one.js';
import {a, b, c} from './mod-two.js';

// main.js File
const modOne = {
      numOne: a,
      numTwo: b,
      numThree: c
    };
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60