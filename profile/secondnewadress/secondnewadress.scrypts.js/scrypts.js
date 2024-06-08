
const button = document.querySelector('button');

button.addEventListener('click', () => { 
    localStorage.town = document.querySelector('#town').value;
    localStorage.avenue = document.querySelector('#avenue').value;
    localStorage.building = document.querySelector('#building').value;
    localStorage.flat = document.querySelector('#flat').value;
    localStorage.add = document.querySelector('#add').value;
    console.log(localStorage);
    })
    
    