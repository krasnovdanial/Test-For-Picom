'use strict';
let formCheck = document.querySelector('.form-check');
let formCheckButton = document.querySelector('.form-check__button');
let passwordInput = document.querySelector('#password');
let emailInput = document.querySelector('#email');
let nameInput = document.querySelector('#name');

nameInput.addEventListener('change', nameInputBorder)
function nameInputBorder() {
    if (nameInput.value !== '') {
        nameInput.style.borderStyle = 'none none solid none';
    } else {
        nameInput.style.borderStyle = 'solid solid solid solid';
    }
}
emailInput.addEventListener('change', emailInputBorder)
function emailInputBorder() {
    if (emailInput.value !== '') {
        emailInput.style.borderStyle = 'none none solid none';
    } else {
        emailInput.style.borderStyle = 'solid solid solid solid';
    }
}
passwordInput.addEventListener('change', passwordInputBorder)
function passwordInputBorder() {
    if (passwordInput.value !== '') {
        passwordInput.style.borderStyle = 'none none solid none';
    } else {
        passwordInput.style.borderStyle = 'solid solid solid solid';
    }
}

formCheckButton.setAttribute("disabled", "disabled");
formCheckButton.classList.add('disabled');

formCheck.addEventListener('click', checkShow);

function checkShow() {
    if (!formCheck.checked) { 
        formCheckButton.setAttribute("disabled", "disabled");
        formCheckButton.classList.add('disabled');
    } else {
        formCheckButton.removeAttribute("disabled");
        formCheckButton.classList.remove('disabled');
        formCheck.classList.add('active');
    }
}