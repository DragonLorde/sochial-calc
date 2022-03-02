function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function SendDoc(link) {
    let uuid = getCookie('uuid')  

    fetch(`http://sochial-calc.io/api/v1.0/doc/${uuid}?link=${link}`).then(
        resp => resp.json()
    ).then(
        jsn => console.log(jsn)
    )
}