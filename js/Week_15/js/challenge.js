let cont = document.querySelector('.container');
let form = document.querySelector('.form');
let input = document.querySelector('.input');
let add = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
if (localStorage.length > 0) {
    for (let i = 1; i <= window.localStorage.length; i++) {
            tasks.innerHTML = window.localStorage.getItem(`TaskNo.${i}`);
    }
}
let n = window.localStorage.length;
add.onclick = function submit(){
    if (input.value.length == 0)    console.log('Empty');
    else {
        let task = document.createElement('div');
        let span = document.createElement('span');
        let btn = document.createElement('span');
        task.classList.add('task');
        span.classList.add('text');
        btn.classList.add('btn');
        btn.textContent = 'delete';
        n++;
        task.classList.add(`TaskNo.${n}`);
        task.appendChild(span);
        task.appendChild(btn);
        span.textContent = input.value;
        input.value = '';
        tasks.appendChild(task);
        let storage = tasks.innerHTML;
        if (n > window.localStorage.length || window.localStorage.length == 0) {
            window.localStorage.setItem(`TaskNo.${n}`,storage);
        }
    }
}
let remove_div = document.querySelectorAll('.task');
let remove_btn = document.querySelectorAll('.btn');
remove_div.forEach((div) => {
    remove_btn.forEach((btn) => {
        btn.addEventListener('click', el => {
            el.currentTarget.classList.add('remove');
            div.classList.remove('task');
            if (div.querySelectorAll('.remove').length > 0) {
                window.localStorage.removeItem(div.getAttribute('class'));
                div.remove();
            }
        })
    })
})
