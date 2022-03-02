let link = document.querySelector('.otch')






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
        if(data.type == 0) {
            link.insertAdjacentHTML('afterbegin' , `
            <p> Скачать отчет </p>
            <form onsubmit="GetResC('${data.id}', this); return false">
                <input type="date" id="start" name="date1"
                value="2021-01-22"
                min="2021-01-01" max="2030-12-31">
                <input type="date" id="start" name="date2"
                value="2021-01-22"
                min="2021-01-01" max="2030-12-31">
                <button value="${data.id}">Скачать</button> 
            </form>
            `)
        } else {
            link.insertAdjacentHTML('afterbegin' , `
            <p> Скачать отчет </p>
            <form onsubmit="GetResA('${data.id}', this); return false">
                <input type="date" id="start" name="date1"
                value="2021-01-22"
                min="2021-01-01" max="2030-12-31">
                <input type="date" id="start" name="date2"
                value="2021-01-22"
                min="2021-01-01" max="2030-12-31">
                <button value="${data.id}">Скачать</button> 
            </form>
            `)
        }
    })
}

GetUsers()

function GetResC(id, th) {
    let body = new FormData(th)
    body.append('id', id)

    

    fetch('http://sochial-calc.io/api/v1.1/getresultuser', {
    method: 'POST',
    body: body
    })
    .then( resp => resp.json() )
    .then( data  => {
        window.location = data.path
    })

}

function GetResA(id, th) {
    let body = new FormData(th)
    body.append('id', id)

    fetch('http://sochial-calc.io/api/v1.1/getresult', {
    method: 'POST',
    body: body
    })
    .then( resp => resp.json() )
    .then( data  => {
        window.location = data.path
    })

}