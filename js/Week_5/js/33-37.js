// Test Case 1
let num = 9; // "009

if (num < 10) {
    console.log(`00${num}`);
}
else if (num > 10 && num < 100) {
    console.log(`0${num}`);
}
else {
    console.log(num);
}
//--------------------------------------------------//
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(
        "{num1} Is The Same Value As {str}"
    )
    if (num1 !== str) {
        console.log(
            "{num1} Is The Same Value As {str} But Not The Same Type"
        )
    }
}
if (num1 != str2 || num1 !== str2) {
    console.log(
        "{num1} Is Not The Same Value Or The Same Type As {str2}"
    )
}
if (str != str2) {
    if (typeof(str) === typeof(str2)) {
        console.log(
            "{str} Is The Same Type As {str2} But Not The Same Value"
        )
    }
}
//--------------------------------------------------//
let num2 = 10;
let num3 = 30;
let num4 = "30";
if (num4 > num2 && num4 !== num3) {
    console.log(
        "30 Is Larger Than 10 And Type string Not The Same Type As number"
    )
}
if (num4 > num2 && num4 == num3 && num4 !== num3) {
    console.log(
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    )
}
if (num4 !== num2 && num4 !== num3) {
    console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
    )
}
//--------------------------------------------------//
// Edit What You Want Here

let num_1 = 10;
let num_2 = -10;
let num_3 = 10;
let num_4 = 51;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num_1 > num_2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num_1 > num_2 && num_1 < num_4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num_1 > num_2 && num_1 === num_3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num_1 + num_2) < num_4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num_1 + num_3) < num_4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num_1 + num_2 + num_3) < num_4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num_4 - (num_1 + num_3) + num_2 === 21) {
  console.log("True");
} else {
  console.log("False");
}