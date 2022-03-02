let form1 = document.querySelector('.form1')
let body = {};

let btnPageNext = document.querySelectorAll('.nextPage')
let form2 = document.querySelector('.form2')
let form3 = document.querySelector('.form3')
let form4 = document.querySelector('.form4')



form1.addEventListener('submit' , (e) => {
    e.preventDefault()
    body = new FormData(form1)
    if(body) {
        form1.classList.add('hide__frm')
        form2.classList.remove('hide__frm')
    }
})


for(let prop of btnPageNext) {
    prop.addEventListener('click', (e) => {
        e.preventDefault()
        if(prop.value == 'true') {
            form2.classList.add('hide__frm')
            setTimeout(() => {
                form3.classList.remove('hide__frm')
            }, 100);
        } else {
            form2.classList.add('hide__frm')
            setTimeout(() => {
                form4.classList.remove('hide__frm')
            }, 100);
        }
    })
}

form3.addEventListener('submit' , (e) => {
    e.preventDefault()
    arrE = []
    let body3 = new FormData(form3)
    for(let prop of body3) {
        arrE.push(prop[1])
    }
    addForm(arrE)
})

form4.addEventListener('submit' , (e) => {
    e.preventDefault()
    arrE = []
    let body4 = new FormData(form4)
    for(let prop of body4) {
        arrE.push(prop[1])
    }
    addForm(arrE)
})

function addForm (arr) {
    let res = 0
    if(arr.length > 1) {
        res = parseInt(arr[0]) + parseInt(arr[1])
    } else {
        res = parseInt(arr[0])
    }
    body.append("employ" , res)
    for(let prop of body) {
        console.log(prop);
    }
    sendForm()
}


function sendForm() {
    fetch('/api/v1.0/register', {
        method: 'POST',
        body: body
      }).then(
        response => response.json()
      ).then(commits => {
            setCook(commits.uuid)
            rerender()
      })
}