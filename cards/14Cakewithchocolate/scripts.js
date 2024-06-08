const addones = document.querySelectorAll('.add') // Цены дополнений(МАССИВ)
const price = document.querySelector('.pris span')// Общая стоимость блюда
let allPrice = Number(price.textContent);
const checkboxes = document.querySelectorAll('.price input')//Галочки к дополнениям
const quantity = document.querySelector('.plusminus input')// Кол-во
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const quantityBox = document.querySelector('.plusminus')
console.log(addones)
addones.forEach(item => {
    item.addEventListener('click', event => {
        console.log(item)
        if(item.querySelector('input').checked && event.target.matches('input')){
            allPrice = allPrice + Number(item.querySelector('span').textContent);
        }else if (!item.querySelector('input').checked && event.target.matches
        ('input')){
            allPrice = allPrice - Number(item.querySelector('span').textContent); 
        }
        price.textContent = allPrice * quantity.value
    })
})

quantityBox.addEventListener('click', ()=>(
    price.textContent = allPrice * quantity.value
))


plus.addEventListener('click', ()=>{
    // quantity.value = quantity.value + 1
    quantity.value++ 
})

minus.addEventListener('click', ()=>{
    // quantity.value = quantity.value + 1
     
    if(quantity.value > 1){
        quantity.value--
    }
})

quantity.addEventListener('click', () =>{
    console.log('изменилось')
})

// plus.addEventListener('click', ()=>{
//     quantity.value * prr
// })
