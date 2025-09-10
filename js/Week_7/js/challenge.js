/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let counter = 0;
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
    document.write(`
        <h3>The Admin For Team ${i+1} is <span style= "font-size: 20px; color: red;">${myAdmins[i]}</span></h3>
        `);
    document.write(`<h3>Team Members:</h3>`);
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j].at(0) == myAdmins[i].at(0)) {
            counter++;
            document.write(`<p>${counter}- ${myEmployees[j]}</p>`);
        }
    }
    counter=0;
    document.write(`<hr>`)
}