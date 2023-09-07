document.getElementById('logout').addEventListener('click' , function(){
    window.localStorage.removeItem('loginInfo')
    window.location.href = 'login.html'
})