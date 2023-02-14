// <=======Scroll-down-button========>

const downBtn = document.getElementById('scrollDown');
downBtn.addEventListener('click', () =>{
    window.scrollTo({
        top:500,
        left:0,
        behavior:"smooth"
    })
})



// <===========Modal Function(POpup)=========>


let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');

})










