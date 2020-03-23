"use strict";
const refs = {
    input: document.querySelector('.editor__input'),
    btn: document.querySelector('.button'),
    list: document.querySelector('.js-todo-list'),
}

refs.btn.addEventListener('click', addItem);
refs.list.addEventListener('click', delItem);




function addItem(e) {
    e.preventDefault();
    if (refs.input.value === '') return;
    const li = document.createElement('li');
    const p = document.createElement('p');
    li.classList.add('todo-list__item');
    p.classList.add('todo__actions', 'todo__text');
    p.innerText = refs.input.value;
    li.appendChild(p);
    refs.list.appendChild(li);
    
}


function delItem(e) {
    const li = document.querySelector('.todo-list__item'); 
    console.log(e.target)
    refs.list.removeChild(e.target)
}