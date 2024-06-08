
const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.city = undefined;
    localStorage.street = undefined;
    localStorage.house = undefined;
    localStorage.apartment = undefined;
    localStorage.info = undefined;
    localStorage.avenue = undefined;
    localStorage.town = undefined;
    localStorage.flat = undefined;
    localStorage.building = undefined;
    localStorage.name = undefined;
    localStorage.surname = undefined;
    localStorage.patronomic = undefined;
    localStorage.telephone = undefined;
    localStorage.add = undefined;
    console.log(localStorage);

})