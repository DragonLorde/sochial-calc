let elemText = document.querySelector('.write');


let liter = 'социальной поддержки'.split('')

function Writer() {
    text =  [].concat(liter)
    setInterval(() => {
        if (text.length > 0) {
            elemText.insertAdjacentText('beforeend' ,text.shift())
        } else {
            clearInterval(this);
            clearInterval(borderAnim)
            elemText.webkitAnimationPlayState = 'paused'
        }
    }, 210);
}

let borderAnim = setInterval(() => {
    elemText.classList.toggle('none')
}, 480);

setTimeout(() => {
    Writer(liter)
}, 800);


document.querySelector('.bar__menu').addEventListener('click' , (e) => {
    navBtn.classList.toggle('close')
    document.querySelector('.menu').classList.toggle('nav__hide')
})

let links = document.querySelectorAll('.menu div ol li a')
for(let prop of links) {
    prop.addEventListener('click' , (e) => {
        navBtn.classList.remove('close')
        document.querySelector('.menu').classList.add('nav__hide')
    })
}

