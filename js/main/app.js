const burger= document.querySelector('.burger');
const menu= document.querySelector('.menu');
const close= document.querySelector('.item-close')
burger.addEventListener('click', ()=>{
    menu.classList.add('visible')
})
close.addEventListener('click', ()=>{
    menu.classList.remove('visible')
})

const stockContainer= document.querySelector('.stock-container')
const stock= document.querySelector('.stock')
const closeStock= document.querySelector('.stock-item-close')

stock.addEventListener('click', ()=>{
    stockContainer.classList.add('visible')
})
closeStock.addEventListener('click', ()=>{
    stockContainer.classList.remove('visible')
})

window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('.upward');
    scroll.classList.toggle("active", this.window.scrollY > 300);
});