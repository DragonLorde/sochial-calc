let barLen = document.querySelectorAll('.male')
let len = 1
let bars = document.querySelector('.proggres__bar')


function scroll() {
    if(len <= barLen.length) {
        bars.style.width = len  * 25 + '%'
        console.log(len);
        len++
    }
}

document.querySelectorAll('button').forEach((elm) => {
    elm.addEventListener('click' , (e) => {
         scroll()
    })
})