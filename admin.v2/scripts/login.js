function GetUser() {
    let body = new FormData( document.querySelector('form') )
    fetch('http://sochial-calc.io/api/v1.1/login', {
        method: 'POST',
        body: body
    })
    .then(resp => resp.json())
    .then( data => {
        console.log(data);
        if(data.code == 201) {
           setCookie('uuid', data.uuid );
           reslide('index.html')
        } else {
            alert('Неверный пароль ')
        }
        
    })
}


if(getCookie('uuid')) {
    reslide('index.html')
}