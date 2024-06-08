const plus = document.querySelector('.plus');


if (localStorage.city2) {
    plus.diplay = 'none';
    const adress2 = `
     <div class = "my-address"> 
     <div>
                                <div class="titel-of-my-adress">
                                    <h2>My adress </h2>
                                </div>
                                <div class="in-my-address-text">
                                </div>
                            </div>
                            <div class="change">
                                <img src="./Иконки/pencil.png" alt="#" class="change-button">
                            </div>
    </div>
    `
    document.querySelector('.two-adresses').innerHTML = adress2;

}


let template = `
<p> ${localStorage.city},  ${localStorage.street}, ${localStorage.house}, ${localStorage.apartment}</p>

`
document.querySelector('.in-my-address-text').innerHTML = template;




const popped = document.querySelector('.popped');
const mainWrapper = document.querySelector('.main-wrapper')
window.addEventListener('click', (event) => {
    if (event.target.matches('.change') || event.target.matches('.change-button')) {
        popped.classList.add('popped-opened');
        mainWrapper.classList.add('main-wrapper-removed');
    } else if (event.target.matches('.popped-closed') || event.target.matches('.popped-closed-button')) {
        popped.classList.remove('popped-opened');
        mainWrapper.classList.remove('main-wrapper-removed');

    }
})


const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.city = document.querySelector('#city').value;
    localStorage.street = document.querySelector('#street').value;
    localStorage.house = document.querySelector('#house').value;
    localStorage.apartment = document.querySelector('#apartment').value;
    localStorage.info = document.querySelector('#info').value;
    console.log(localStorage);
    popped.classList.remove('popped-opened');
    mainWrapper.classList.remove('main-wrapper-removed');
})


template = `
<p> ${localStorage.city},  ${localStorage.street}, ${localStorage.house}, ${localStorage.apartment}</p>

`
document.querySelector('.in-my-address-text').innerHTML = template;


