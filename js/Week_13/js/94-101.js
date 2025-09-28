let add = document.querySelector('.classes-to-add');
let remove = document.querySelector('.classes-to-remove');
let element = document.querySelector('[title = "Current"]').classList;
let list = document.querySelector('.classes-list div');

// console.log(add);
// console.log(remove);
// console.log(element);
// console.log(list);
window.onload = function(){
    let span;
    for (let i = 0; i < element.length; i++) {
    span = document.createElement('span');
    span.textContent = element[i];
    list.appendChild(span);
}
}
//add
add.addEventListener('blur',function(){
    if (add.value.length > 0) {
        let add_input = add.value.trim().split(" ").map(el => el.toLowerCase());
        
        for (let i = 0; i < add_input.length; i++) {if (!element.contains(add_input))   element.add(add_input[i]);}
        list.innerHTML = '';
        let sorted_classes = [''];
        // add class to element
        for (let i = 0; i < element.length; i++) {sorted_classes[i] = element[i];}
        sorted_classes.sort();
        // add span child to list
        for (let i = 0; i < element.length; i++) {
            span = document.createElement('span');
            span.textContent = sorted_classes[i];
            list.appendChild(span);
}
add.value ='';
}
});

// remove
remove.addEventListener('blur',function(){
    if (remove.value.length > 0) {
        let remove_input = remove.value.trim().split(" ").map(el => el.toLowerCase());
        console.log(remove_input);
        //remove class from element
        for (let i = 0; i < remove_input.length; i++) {
            if (element.contains(remove_input))   element.remove(remove_input[i]);
}
//remove span child from list
// لما جربت لوب عادية بتبدأ من الصفر لما عنصر بيتحذف الترتيب بتاع الاخير بيتغير فعكستها و اشتغلت
for (let j = list.children.length-1; j >= 0; j--) {
    if (remove_input.includes(list.children[j].textContent)) list.children[j].remove();
}
if (element.length == 0) {
    span = document.createElement('span');
    span.style.backgroundColor = "transparent";
    span.style.color = "black";
    span.textContent = "No Classes To Show";
    list.appendChild(span);
}
remove.value='';
}
});
// __________________________________________________________________________________________________________//
document.querySelector("p").remove();
let div = document.getElementsByClassName("our-element")[0];
let before = document.createElement("div");
before.className = "start";
before.title = "Start Elment";
before.setAttribute("data-value", "Start");
before.innerHTML = "Start";

let after = document.createElement("div");
after.className = "end";
after.title = "End Elment";
after.setAttribute("data-value", "End");
after.innerHTML = "End";

div.before(before);
div.after(after);
// أخدته منك كوبي الصراحة فكرته عبيطة بعد الل عملته في التكليف اللي فات
// __________________________________________________________________________________________________________//
console.log(document.querySelector('.four').childNodes[4]);
// __________________________________________________________________________________________________________//
let elements = Array.from(document.querySelector(".five").children);
//Array.from()  و انا بدور ازاي اجيب نوع العنصر لقيت الطريقة د بدل ماعمل لوب و متغير كمان أو ماب
//
console.log(elements);
elements.forEach(element => {
    element.addEventListener('click', function() {
        console.log(`"${element.tagName}"`);
    });
});
// لما عملت الدوت بعد el المفروض تظهرلي القائمة فيها tagName بس مظهرتشكتبتها عادي و اشتغلت
// تبا لجافا سكريبت عايز سي بلس بلس