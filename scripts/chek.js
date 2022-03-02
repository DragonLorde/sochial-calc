
function StartTest() {
    let rowChild = document.querySelectorAll('.childs__row')
    if(rowChild.length > 0) {
        reslide('/questions.html')
    } else {
        document.querySelector('.alert').classList.remove('hide__alert')
    }
}

function startNoChild() {
    reslide('/questions.html')
}

function cheksis() {
    if(getCookie('uuid') ) {
        reslide('/profile.html')
    } else {
        reslide('/')
    }
}

if(!getCookie('uuid') ) {
    reslide('/')
}

function exitits() {
    deleteCookie('uuid');
    cheksis()
}

function gl() {
    reslide('/')
}