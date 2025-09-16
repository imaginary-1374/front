function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    let result = "";
    for (let i = 0; i < zName.length; i++) {
        if (zName.at(i-1) == ' ') {
            result += zName.at(i).toUpperCase();
            break;
        }
        result += zName.at(i);
    }
    return result;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
}
  function ageWithMessage(zAge) {
    // Write Your Code Here
    let result = "";
    for (let i = 0; i < zAge.length; i++) {
        if (zAge.at(i) != NaN) result += zAge.at(i);  
    }
    return result;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
}
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let result = `${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
    return result;
    // Egypt => You Live In EG
    // Syria => You Live In SY
}
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}., Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}.`;
}
  return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
//_______________________________________________________________________________________________________________________//
let itsMe = _ => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
//_______________________________________________________________________________________________________________________//
let  checker =  zName =>  status =>  salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
//_______________________________________________________________________________________________________________________//
function specialMix(...data) {
  // Your Code Here
    let num_result = 0;
    let temp_num = "";
    for (let i = 0; i < data.length; i++) {
        if (typeof(data.at(i)) == "number")    num_result += +data.at(i);
        else{

        for (let j = 0; j < data[i].length; j++) {
            if (+data[i][j] >= 0 && +data[i][j] <=9) temp_num += data[i][j];
        }
    }
    num_result += +temp_num;
    temp_num = "";
    }
    return num_result === 0? `${"All Is Strings"}` : `"The Sum Is: ${num_result}` ;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings