let form = document.querySelector('.form1')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    login()
})

function login () {
    let body = new FormData(form)
    //http://sochial-calc.io/api/v1.0/login
    fetch('http://sochial-calc.io/api/v1.0/login', {
        method: 'POST',
        body: body
      }).then(
        response => response.json()
      ).then(commits => {
          console.log(commits);
            setCook(commits.uuid)
            rerender()
      })
}


