const loginInfo = JSON.parse( window.localStorage.getItem('loginInfo') )

if (loginInfo?.token === undefined){
    document.querySelectorAll('.d-block-log').forEach((element) => {
        element.remove()
    })
}else{
    document.querySelectorAll('.d-none-log').forEach((element) => {
        element.remove()
    })
}