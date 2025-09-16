function sayHello(theName, theGender) {
  // Your Code Here
    if (theGender === 'Female') {
        theGender = 'Miss';
    }
    else{
        theGender = 'Mr';
    }
    console.log(`"hello ${theGender} ${theName}"`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
//________________________________________________________________________________________________//
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (typeof(secondNum) == 'undefined') { 
    console.log("Second Number Not Found");
  }
  else{
    if (operation == 'subtract') {
        console.log(firstNum - secondNum);
    }
    else if (operation == 'multiply') {
        console.log(firstNum * secondNum);
    }
    else if (operation == 'add' || typeof(operation) == 'undefined') {
        console.log(firstNum + secondNum);
    }
    else {
        console.log("not avilable");
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
//________________________________________________________________________________________________//
function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100 ) {
    console.log(
        `The Age in:
        Years => ${theAge}
        Months => ${theAge*=12}
        Days => ${theAge*=30}
        Houres => ${theAge*=24}
        Secondes => ${theAge*=60}`);
  }
  else{
    console.log("Age Is Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
//________________________________________________________________________________________________//
function checkStatus(a, b, c) {
  // Your Code Here
  let number;
  let bole;
  let Str;

  if (typeof(a) == 'number') number = a;
  else if (typeof(b) == 'number') number = b;
  else number = c;

  if (typeof(a) == 'string') Str = a;
  else if (typeof(b) == 'string') Str = b;
  else   Str = c;

  if (typeof(a) == 'boolean') bole = a;
  else if (typeof(b) == 'boolean') bole = b;
  else  bole = c;

  if (bole) console.log(`"Hello ${Str}, Your Age Is ${number} You Are Available For Hire"`);
  else console.log(`"Hello ${Str}, Your Age Is ${number} You Are Not Available For Hire"`);
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//________________________________________________________________________________________________//

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.writeln(`<select>`)
  for (let u = startYear; u <= endYear; u++) {
  document.writeln(`<option value="${u}">${u}</option>`)
  }
  document.writeln(`</select>`)
}
createSelectBox(2000, 2021);
//________________________________________________________________________________________________//
function multiply(...arr) {
    let result =1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr.at(i)) == 'number') {
            result *= Math.floor(arr.at(i));
         }
    }
    console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000