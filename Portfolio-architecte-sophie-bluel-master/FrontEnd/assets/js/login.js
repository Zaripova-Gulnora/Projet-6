

document.getElementById('login_form').addEventListener('submit', async function(e){
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    await postLogin(email, password);
})