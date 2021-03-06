

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
    let slides = document.querySelectorAll('.ques__column')
    let gender = obj.gender.toLowerCase()
    if(gender == 'female') {
        slides[0].classList.add('hide__q')
        slides[1].classList.remove('hide__q')
        addEv()
    } else {
        slides[1].classList.add('hide__q')
        slides[0].classList.remove('hide__q')
    }
}

let slide = document.querySelectorAll('.male');
let curSlide = 0;

let opthions = {}

document.querySelectorAll('.ques__button button').forEach((elm) => {
    elm.addEventListener('click' , (e) => {
        if(curSlide < 3) {
            opthions[elm.name] = elm.value
            prev = curSlide
            nextSlide(curSlide += 1, prev)
            prev = curSlide
        } else {
            document.querySelector('.ques').classList.add('hide__block')
            document.querySelector('.otvet').classList.remove('hide__block')
            sendQues()
        }
    
    })
})



function nextSlide(slideCount, prev) {
    if(slideCount <= 3) {
        slide[prev].classList.add('hide__slide')
        slide[slideCount].classList.remove('hide__slide')
    }
    
}

function sendQues() {
    //http://sochial-calc.io/api/v1.0/build/6056b05498f96?pregant=1&insurance=0&empolyd=0&army=1
    let uuid = getCookie('uuid')  
    let url = `http://sochial-calc.io/api/v1.0/build/${uuid}?pregant=${opthions.pregant}&insurance=${opthions.insurance}&empolyd=${opthions.empolyd}&army=${opthions.army}`
    fetch(url).then(
        resp => resp.json()
    ).then(
        cont => instData(cont)
    )
}

function instData(obj) {
    let textArr = []
    let box = document.querySelector('.otvet__box')
    for(let prop in obj.data) {
        for(let prop2 of obj.data[prop]) {
            textArr.push(prop2.text)
            box.insertAdjacentHTML('beforeend' , `
            <div class="an">
                <p class="blck">
                    ${prop2.text}
                    <div class="otvet__hide-block bk">
                        <p>
                            ?????????????????? ???? ???????? ???????????????????? ?????????????????? ?????????? ????????????:

                            ??? ?? ?????????????????????? ?????????? ?????????? ???????????? ?????????? ?????????????????? ?????????????? ?????? ???????????? ???????????? ?????????????????????????????? ?? ?????????????????????????? ??????????,
                            
                            - ?????????? ?????????? ?????????????? ???????????????????????????????????????? ???????????? ???????????????????????????? ?????????????????????????????? ?? ?????????????????????????? ?????????? ?? ?????????????????? ??????????????, ?? ???????????????? ?????????????????? ??? ?????????? ???????????????????????? ???????????????????? ????????????.
                            
                            ?????????????????? ???????????????????? ?? ?????????? ???????????????????? ??????????????????, ?????????????????????????????? ?????????????????????? ?????????????????????????????????? ?????? ?????????? ?? ????????????, ?????????? ???????????????? ?? ???????????????????? ???????????????????? ???????????? ?????????????? ???????????????????? ???????????????? ???? ???????????? 8 (3452) 6???8888???6, ???? ?????????????????? ??????????????????????????-???????????????????? ???????????? ?????????????????? ?????????????? ??? 8 (3452) 566-330, 88001001290, ?? ?????????? ???? ?????????????? ?????????? ?????????????????? ??????????????, ???????????? ?????????????? ?????????????????????????????? ?? ?????????????????????????? ??????????.
                            
                            ?????????????? ?????????????????? ?????????????????????????????? ?????????????? ?? ?????????????????????? ?? ?????????????????? ?????????????? ?? 2020 ????????
                            
                            ????????????????: ?????????????????????? ?????????????????????? ???????????????? ???????????????? ??????????????

                            https://www.gosuslugi.ru/
                        </p>
                        <a href="/assets/file/zav.pdf" download="">?????????????? ????????????????</a>
                    </div>
                </p>
            </div>
            `)
        }
    }
    let code = uuidv4();
    generate(textArr.toString(), code)
    document.querySelectorAll('.blck').forEach((elm) => {
        elm.addEventListener('click' , (e) => {
            console.log(elm);
            elm.parentElement.querySelector('.bk').classList.toggle('otvet__hide-block')
            elm.parentElement.querySelector('.bk').classList.toggle('otvet__hide-vis')

        })
    })
}


