let input = document.querySelector('#task-input');
let sub = document.querySelector('.sub');
let ul = document.querySelector('ul');
let empty = document.querySelector('.empty-state');

let tasks = getTasks();

//========================================================================================//
// Get & Save tasks
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//========================================================================================//
// Checkbox handler
let check = (checkbox, li, id) => {
    checkbox.addEventListener('change', () => {
        li.classList.toggle('done', checkbox.checked);
        tasks = tasks.map(t => t.id === id ? {...t, done: !t.done} : t);
        saveTasks(tasks);
    });
};
//========================================================================================//
// Delete button handler
let rv = (button, li, id) => {
    button.addEventListener('click', () => {
        li.remove();
        tasks = tasks.filter(t => t.id !== id);
        saveTasks(tasks);
        updateVisibility();
    });
};
//========================================================================================//
// Edit button handler
let edit = (edtBtn, li, id) => {
    let span = li.querySelector('.text span');

    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = span.textContent;

    edtBtn.addEventListener('click', () => {
        li.querySelector('.text').replaceChild(editInput, span);
        editInput.focus();
    });

    editInput.addEventListener('blur', () => {
        span.textContent = editInput.value;
        li.querySelector('.text').replaceChild(span, editInput);
        tasks = tasks.map(t => t.id == id?  {...t, text: editInput.value} : t)
        saveTasks(tasks);
    });
}
//========================================================================================//
// Edit clear handler

//========================================================================================//
// Render single task
let renderTask = (task) => {
    let li = document.createElement('li');

    let div = document.createElement('div');
    div.className = 'text';
    
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done || false;

    div.appendChild(checkbox);

    let span = document.createElement('span');
    span.textContent = task.text;
    div.appendChild(span);

    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = '✏️';
    div.appendChild(editBtn);

    li.appendChild(div);

    if (task.done) li.classList.add('done');

    let button = document.createElement('button');
    button.className = 'delete';
    button.textContent = 'Delete';
    li.appendChild(button);

    ul.appendChild(li);
    check(checkbox, li, task.id);
    rv(button, li, task.id);
    edit(editBtn, li, task.id);
};
//========================================================================================//
// Create new task
function createTask(){
    if (input.value.trim().length == 0) return;
    
    let now = new Date().getTime();
    let newTask = {id: now, text: input.value.trim(), done: false};
    
    tasks.push(newTask);
    saveTasks(tasks);
    
    renderTask(newTask);
    input.value = '';
    updateVisibility();
}
//========================================================================================//
// Toggle empty-state visibility
let updateVisibility = () => {
    ul.children.length > 1 ? empty.style.display = 'none' : empty.style.display = 'block';
};
//========================================================================================//
// Init
sub.addEventListener('click', createTask);

tasks.forEach(renderTask);
updateVisibility();
