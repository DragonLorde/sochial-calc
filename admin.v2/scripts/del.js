
function DelUser() {
    let user = {
        uuid:getCookie('uuid')
    }
    
    fetch('https://bsl-show.online/light/api/v1.1/deluser', {
    method: 'POST',
    body: JSON.stringify(user)
    })
    .then( resp => resp.json() )
    .then( data  => {
        deleteCookie('uuid');
        reslide('login.html')
    })

}


