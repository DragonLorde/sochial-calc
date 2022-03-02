
function DelUser(uuid) {
    let user = {
        uuid:uuid
    }
    
    fetch('http://sochial-calc.io/api/v1.1/deluser', {
    method: 'POST',
    body: JSON.stringify(user)
    })
    .then( resp => resp.json() )
    .then( data  => {
        GetUsers()
    })

}


function GetRes(id, th) {
    
    let body = new FormData(th)
    body.append('id', id)

    

    fetch(' http://sochial-calc.io/api/v1.1/getresultuser', {
    method: 'POST',
    body: body
    })
    .then( resp => resp.json() )
    .then( data  => {
        window.location = data.path
    })

}

function UpdtPass(uuid) {
    let user = {
        uuid:uuid
    }
    console.log(user);
    fetch(' http://sochial-calc.io/api/v1.1/genpass', {
    method: 'POST',
    body: JSON.stringify(user)
    })
    .then( resp => resp.json() )
    .then( data  => {
        GetUsers()
        alert(`Пароль изменен!  Новый пароль ${data.new_pass}`)
    })
}