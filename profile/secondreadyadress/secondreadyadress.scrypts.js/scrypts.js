const adresses = `
   <div class = " in-list ">
   <p class = " small">Titel</p>
   <p> Home</p>
   </div>
    <div class = " in-list ">
    <b class = " small "> City </b> 
    <p>${localStorage.town}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Street </b> 
    <p>${localStorage.avenue}</p>
     </div>
    <div  class = " in-list ">
    <b class = " small "> House </b> 
    <p>${localStorage.building}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Apartment </b> 
    <p>${localStorage.flat}</p>
    </div>
    <div  class = " in-list ">
    <b class = " small "> Additional Information </b> 
    <p>${localStorage.add}</p>
    </dv>

`
document.querySelector('.adress-list').innerHTML = adresses;
