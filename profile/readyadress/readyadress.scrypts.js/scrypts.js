const adresses = `

    <div class = " in-list ">
    <b class = " small "> City </b> 
    <p>${localStorage.city}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Street </b> 
    <p>${localStorage.street}</p>
     </div>
    <div  class = " in-list ">
    <b class = " small "> House </b> 
    <p>${localStorage.house}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Apartment </b> 
    <p>${localStorage.apartment}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Additional Information </b> 
    <p>${localStorage.info}</p>
    </dv>

`
document.querySelector('.adress-list').innerHTML = adresses;

