function setCook(id) {
    setCookie('uuid', id)
}

function cheksis() {
    if(getCookie('uuid') ) {
        reslide('/profile.html')
    } 
}

cheksis()