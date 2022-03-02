let lk = document.querySelector('.users__col')

let user = {
    uuid:getCookie('uuid')
}

function GetUsers() {
    fetch('http://sochial-calc.io/api/v1.1/getalluser')
    .then( resp => resp.json() )
    .then( data  => {
        console.log(data)
        lk.innerHTML = ' '
        for(let prop of data ) {
            lk.insertAdjacentHTML('afterbegin' , `
            <div class="users__row">
                <div class='cl-1'>
                    <p>ID: <span> ${prop.id} </span> </p>
                    <p>ФИО: <span> ${prop.last_name} ${prop.first_name} ${prop.patronymic} <span> </p>
                    <p>Тип: <span> ${GetType(prop.type)} </span> </p>
                    <button onclick="DelUser('${prop.uuid}')" value="${prop.uuid}">Удалить</button>
                </div>
                <div class='user__hide user__hide-hide '>
                    
                    <div>
                        <form onsubmit="GetRes('${prop.id}', this); return false">
                            <input type="date" id="start" name="date1"
                            value="2021-01-22"
                            min="2021-01-01" max="2030-12-31">
                            <input type="date" id="start" name="date2"
                            value="2021-01-22"
                            min="2021-01-01" max="2030-12-31">
                            <button value="${prop.id}">Скачать</button> 
                        </form>
                    </div>
                    <div style='display:flex; flex-direction: column;'>
                        <p class='pass' style=' margin-bottom:10px;'>Текущий Логин <span> ${prop.login}  </span> </p>
                        <p class='pass' style=' margin-bottom:10px;'>Текущий пароль <span> ${prop.pass}  </span> </p>
                        <button onclick="UpdtPass('${prop.uuid}')" value="${prop.uuid}">Сменить пароль</button>
                    </div>
                </div> 
            </div>
        `)
        }
        AddShow()
    })
}

GetUsers()

function GetType($type) {
    if($type == 0) {
        return 'Сотрудник'
    }
        return 'Администратор'
}

function DelUser() {
    let user = {
        uuid:"60806f28b3e00"
    }
    console.log('asfasf');
    // fetch('https://bsl-show.online/light/api/v1.1/deluser', {
    //     method: 'POST',
    //     body: JSON.stringify(user)
    // });
   
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



function AddShow() {
    let hides = document.querySelectorAll('.cl-1')
    for(let prop of hides) {
        prop.addEventListener('click' , (e) => {
            prop.parentElement.querySelector('.user__hide').classList.toggle('user__hide-hide')
        })
    }
}

{/* <div class="users__row">
<p>ID: ${prop.id}</p>
<p>${prop.first_name} ${prop.last_name} ${prop.patronymic}</p>
<p> ${GetType(prop.type)} </p>
<button onclick="DelUser('${prop.uuid}')" value="${prop.uuid}">Удалить</button>

<input type="date" id="start" name="trip-start"
    value="2018-07-22"
    min="2018-01-01" max="2018-12-31">
<input type="date" id="start" name="trip-start"
    value="2018-07-22"
    min="2018-01-01" max="2018-12-31">

<button onclick="GetRes('${prop.id}')" value="${prop.id}">Скачать</button>

</div> */}




{/* <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            <input type="date" id="start" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            
            <button onclick="GetRes('${prop.id}')" value="${prop.id}">Скачать</button> */}