
function getUser() {
    let uuid = getCookie('uuid')  
    let url = `http://sochial-calc.io/api/v1.0/getProfile/${uuid}`
    fetch(url).then(
        resp => resp.json()
    ).then(
        cont => rowProf(cont)
    )
}

getUser()


function rowProf(obj) {
    console.log(obj);
    document.querySelectorAll('.profile__info-row')[0].insertAdjacentHTML('beforeend' , `
        <p>Имя Фамилия: <span>${obj.first_name} ${obj['last_name']}</span></p>
        <p>Возраст: <span>${obj.age}</span> лет</p>
    `)
    document.querySelectorAll('.profile__info-row')[1].insertAdjacentHTML('beforeend' , `
        <p>Email: <span>${obj.email}</span></p>
        <p>Телефон: <span>${obj.phone}</span></p>
        <p>Пол: <span>${obj.gender}</span></p>
    `)
    document.querySelector('.fam__p').insertAdjacentText('beforeend' , `${obj.mid_earnings}`)
}

document.querySelector('.form1').addEventListener('submit', (e) => {
    e.preventDefault()
    addChild()
})

function addChild() {
    let form1 = document.querySelector('.form1');
    let body = new FormData(form1)
    let uuid = getCookie('uuid')  
    let url = `http://sochial-calc.io/api/v1.0/addchild/${uuid}`
    fetch(url, {
        method: 'POST',
        body: body
    }).then(
        resp => resp.json()
    ).then(
        cont => GetChild(cont)
    )
}

function GetChild() {
    //http://sochial-calc.io/api/v1.0/getChilds/
    let uuid = getCookie('uuid')  
    let url = `http://sochial-calc.io/api/v1.0/getChilds/${uuid}`
    fetch(url).then(
        resp => resp.json()
    ).then(
        cont => childRow(cont)
    )
}

GetChild()

function childRow(obj) {
    console.log(obj);
    let col = document.querySelector('.childs__column')
    col.innerHTML = ''
    for(let prop of obj) {
        col.insertAdjacentHTML('beforeend' , `
        <div class="childs__row">
            <div class="childs__text">
                <p>${prop.first_name} ${prop.last_name}</p>
                <p>${prop.age} лет</p>
                <p>Пол: Мужской </p>
            </div>
            <div class="childs__del" name='${prop.id}'>
                <img src="assets/svg/close.svg" alt="">
            </div>
        </div>   
        `)
    }
    addDel()
}


function addDel() {
    del = document.querySelectorAll('.childs__del')
    for(let prop of del) {
        prop.addEventListener('click' , (e) => {
            delChild(prop)
        })
    }
}

function delChild(e) {
    let id = e.getAttribute('name')
    let url = `http://sochial-calc.io/api/v1.0/removechild/${id}`
    console.log(url);
    fetch(url).then(
        resp => resp.json()
    ).then(
        cont => GetChild()
    )
}


function closeAlert() {
    document.querySelector('.alert').classList.add('hide__alert')
}