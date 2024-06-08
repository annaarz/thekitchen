

if (localStorage.town !== 'undefined') {

    let adress2 = `
  
    <div class = "in-folders">
                                <div class="in-my-address">
                                    <h2>My adress </h2>
                          
                                <p class="in-my-address-text">

    ${localStorage.town}, ${localStorage.avenue}, ${localStorage.building}, ${localStorage.flat} </p>
</div>
        <div class="in-my-address">
        <a href="../../secondreadyadress/secondreadyadress.html/index.html"><img
        src="../icons.registratedpage/arrow.png" alt="#"></a>
    
        </div>
   </div>
    
        `
    document.querySelector('.two-adresses').innerHTML = adress2;

    document.querySelector('.center').classList.add('center-none')


} else {
    
    document.querySelector('.center').classList.remove('center-none')
    document.querySelector('.two-adresses').classList.add('center-none')
}

const template = `
<p> ${localStorage.name} ${localStorage.surname} ${localStorage.patronomic}</p>
<p> ${localStorage.code} ${localStorage.number} </p>
`
document.querySelector('.for-template').innerHTML = template;


let adress = `
<p> ${localStorage.city},  ${localStorage.street}, ${localStorage.house}, ${localStorage.apartment}</p>

`
document.querySelector('.in-my-address-text').innerHTML = adress;

