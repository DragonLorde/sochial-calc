function AddUser() {
    let body = new FormData( document.querySelector('form') )
    fetch('http://sochial-calc.io/api/v1.1/register', {
        method: 'POST',
        body: body
    })
    .then(resp => resp.json())
    .then( data => {
        if(data.code == 201) {
            alert('Вы успешно создали нового пользователя')
            reslide('users.html')
         } else {
             alert('Такой пользователь уже существует')
         }
    })
}


let user = {
    uuid:getCookie('uuid')
}


function User() {

   

    fetch('http://sochial-calc.io/api/v1.1/getuser', {
    method: 'POST',
    body: JSON.stringify(user)
    })
    .then( resp => resp.json() )
    .then( data  => {
        console.log(data);
      if(GetTypeS(data.type) == 0) {
            alert('Нет доступа')
            reslide('index.html')
      }
    })
}

function GetTypeS($type) {
    if($type == 0) {
        return 0
    }
        return 1
}

User()