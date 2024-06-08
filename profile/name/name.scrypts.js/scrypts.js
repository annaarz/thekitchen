const button = document.querySelector('button');

button.addEventListener('click', () => { 
localStorage.name = document.querySelector('#name').value;
localStorage.surname = document.querySelector('#surname').value;
localStorage.patronomic = document.querySelector('#patronymic').value;
console.log(localStorage);
})
