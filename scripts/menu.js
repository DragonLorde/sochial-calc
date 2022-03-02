let navBtn = document.querySelector('.bar__menu')
document.querySelector('.bar__menu').addEventListener('click' , (e) => {
    navBtn.classList.toggle('close')
    document.querySelector('.menu').classList.toggle('nav__hide')
})