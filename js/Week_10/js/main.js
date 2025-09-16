//vid 74
//filter strings + multiply
let mix_v = "A13BS2ZX";
let num_sol = mix_v.split("").filter(el=> !isNaN(el)).map(el=> el*el);
    console.log(num_sol);
//_____________________________________________________________________________________//
let mix = [1, 2, 3, "Z", 4, "Y", "D", "O", "M", 5, 6];
let first = mix.map(el => isNaN(el)? el : "").reduce((a,c) => a+c);
console.log(first);
//_____________________________________________________________________________________//
let myString = "ZZYYYDDDDOOOOMMM";
let second = myString.split("").filter(
    (el,ind,arr) => el != arr[ind-1]).reduce((a,c) => a+c);
// ZYDOM
console.log(second);
//_____________________________________________________________________________________//
let myArray = ["Z", "Y", "D", ["O", "M"], "#"];
let third = myArray.reduce((a,c) => a+c).split("")  // console.log (third) => ZYDO(,)M#
.reduce((a,c) => c!=','? a+c:a);                    // console.log (third) => ZYDOM#
console.log(third);
// ZYDOM#
//_____________________________________________________________________________________//
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums_only = numsAndStrings.filter(el => !isNaN(el)).map(el => -el);
console.log(nums_only);
// [-1, -10, 10, 20, -5, -3]
//_____________________________________________________________________________________//
let nums = [2, 12, 11, 5, 10, 1, 99];
let solution = nums.reduce((a,c) => c % 2 ==0? c*a : c+a ,1)
console.log(solution);
// 500