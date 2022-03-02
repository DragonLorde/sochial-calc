
let lk = document.querySelector('.lk')

let user = {
    uuid:getCookie('uuid')
}

function GetUsers() {
    fetch('http://sochial-calc.io/api/v1.1/getuser', {
    method: 'POST',
    body: JSON.stringify(user)
    })
    .then( resp => resp.json() )
    .then( data  => {
       if(data) {
            lk.insertAdjacentHTML('afterbegin', `
                <h1>Личный кабинет</h1>
                <p>${data.first_name} ${data.last_name} ${data.patronymic}</p>
                <p>${GetType(data.type)}</p>
            `)
        } else {
            deleteCookie('uuid')
            reslide('login.html')
        }
    })
}

function GetType(type) {
    if(type == 0) {
        return 'Сотрудник'
    }
        return 'Администратор'
}


GetUsers()