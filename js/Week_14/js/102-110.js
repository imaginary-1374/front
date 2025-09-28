// let prmt = prompt('Print Number From – To', 'Example: 5-20');
// let num = prmt.split('-').map(num => +num.trim());
// console.log(num);
// if (num.at(0) == num.at(1)) {   
//     console.log(num);   
// }   else if (num.at(0) < num.at(1)) {
//     for (let i = num[0]; i <= num[1]; i++) console.log(i);
// }   else{
//     for (let i = num[1]; i < num[0]; i++) console.log(i);
// }
//_________________________________________________________________//
let div = document.querySelector('div');
let btn = document.querySelector('button');

setTimeout(function(){
    div.style.display = 'block';
},5000)

btn.onclick = function () {
div.style.display = 'none';
}
//_________________________________________________________________//

let div_2 = document.querySelector('#no2');

// function countdown(){
//     div_2.innerHTML -= 1;
//     if (div_2.innerHTML === '0') {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countdown, 1000)
//_________________________________________________________________//
// function countdown_href(){
//     div_2.innerHTML -= 1;
//     if (div_2.innerHTML === '0') {
//         // location.href = 'https://Elzero.org';
//     }
// }
// counter = setInterval(countdown_href, 1000)
//_________________________________________________________________//
function countdown_href(){
    div_2.innerHTML -= 1;
    if (div_2.innerHTML === '5') window.open("https://Elzero.org", "self", "width=400,height=400");
    if (div_2.innerHTML === '0') {
        clearInterval(counter);
    }
    
}
counter = setInterval(countdown_href, 1000)