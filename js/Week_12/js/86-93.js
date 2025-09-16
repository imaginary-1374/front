// console.log(document.getElementById('elzero'));
// console.log(document.getElementsByClassName('element'));
// console.log(document.getElementsByName('js'));
// console.log(document.getElementsByTagName('div'));

// console.log(document.querySelector('#elzero'));
// console.log(document.querySelector('.element'));
// console.log(document.querySelector('div[name=js]'));
// console.log(document.querySelector('div'));

// console.log(document.querySelectorAll('#elzero'));
// console.log(document.querySelectorAll('.element'));
// console.log(document.querySelectorAll('div[name=js]'));
// console.log(document.querySelectorAll('div'));

// console.log();
// console.log();
// console.log();
// _____________________________________________________________________________//
// let img = document.querySelectorAll('#first').length;

// for (let i = 0; i < img; i++) {
//     document.images[i].src = "js/dark-souls-3-city-fantasy-q9-1280x1024.jpg";
//     document.images[i].alt = "ZYDOM";
// }
// _____________________________________________________________________________//
// let val = document.querySelector('input');
//     let usd = egp = 0;

//     let elem = document.querySelector('.result');
    
//     val.oninput = function(){
//     usd = val.value;
//     egp = (usd * 15.6).toFixed(2);
//         elem.innerHTML = `{${usd}} USD Dollar = {${egp}} Egyptian Pound`;
//     }
// _____________________________________________________________________________//
// let one = document.querySelector(`.one`);
// let two = document.querySelector(`.two`);

// let tempText = two.textContent;
// let tempTitle = two.title;

// two.textContent = one.textContent + ' ' + one.attributes.length;
// one.attributes.length; جبتها من بتاع تشار اللي انت مش بتحبه
// two.title = one.title;

// one.textContent = tempText;
// one.title = tempTitle;

// console.log(one,two);
// _____________________________________________________________________________//
// let alt = document.querySelectorAll("#sec");
// console.log(alt);
// for (let i = 0; i < alt.length; i++) {
//     alt[i];
//     if (alt[i].hasAttribute("alt")) {
//         alt[i].alt = "old";
//     }
//     else {
//         alt[i].alt = "new";
//     }
// }
// _____________________________________________________________________________//
let section = document.querySelector("form");
section.setAttribute("style",
    `
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 30px;
    max-width: 300px;
    align-items: ;
    background-color: #f9f9f9;
    border-radius: 8px;
    `);
let input = document.querySelectorAll(".input");
for (let i = 0; i < input.length; i++) {
    input[i].setAttribute("style",`
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        `)
}

let sub = document.querySelector("input[type=submit]");
sub.setAttribute("style",`
    padding: 8px;
    margin-bottom: 10px;
        border-radius: 4px;
        border: none;
        background-color: #009482;
        color: white;
        font-size: 17px;
        font-weight: bold;
        `);
    let num = document.querySelector("input[type = number]");
    let txt = document.querySelector("input[type = text]");
    let select = document.querySelector("select[name=type]");
    let results = document.querySelector(".results");
    let flage = false;

    sub.onclick = function(event){
    event.preventDefault();

    if (flage === true) {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  }


    for (let i = 0; i < parseInt(num.value); i++) {
    if (select.value == "Div"){
        let element = document.createElement("div");
        element.setAttribute("style",`
            gap: 10px;
            text-align: center;
            background-Color: #eb2672;
            padding: 10px;
            margin: 5px;
            border-radius: 4px;
            `);
            element.textContent = txt.value;
            element.className = "box";
            element.title = "Element";
            element.id = `id-${i}`;
            results.appendChild(element);
    } 
    
    else{
        let element = document.createElement("section");
        element.setAttribute("style",
            `
            gap: 10px;
            text-align: center;
            background-Color: #fc5426;
            padding: 10px;
            margin: 5px;
            border-radius: 4px;
            `);
        element.textContent = txt.value;
        element.className = "box";
        element.title = "Element";
        element.id = `id-${i}`;
        results.appendChild(element);
    } 

    }
    flage = true;
    }