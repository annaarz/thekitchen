const button = document.querySelector('button');

button.addEventListener('click', () => { 
localStorage.city = document.querySelector('#city').value;
localStorage.street = document.querySelector('#street').value;
localStorage.house = document.querySelector('#house').value;
localStorage.apartment = document.querySelector('#apartment').value;
localStorage.info = document.querySelector('#info').value;
console.log(localStorage);
})
