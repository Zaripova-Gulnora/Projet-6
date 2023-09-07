async function getGalerie(){
    try{
        const reponse = await fetch("http://localhost:5678/api/works");
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
        
    }
}

async function getCategories(){
    try{
        const reponse = await fetch("http://localhost:5678/api/categories");
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
    }
}

async function postLogin(email, password){
    try{
        const reponse = await fetch("http://localhost:5678/api/users/login",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: "POST",
            body: JSON.stringify({
                "email": email,
                "password": password,
                })
        });
        const data = await reponse.json();

        window.localStorage.setItem('loginInfo', JSON.stringify(data))

        window.location.href = 'index.html'

        return data;
    }catch(error){
        console.error(error);
    }
}

async function deletePhoto(id){
    try{
        const reponse = await fetch(`http://localhost:5678/api/works/${id}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${JSON.parse( window.localStorage.getItem('loginInfo'))?.token}`
            },
            method: "DELETE",
        });

        return reponse;
    } catch(error) {
        console.error(error);
    }
}

async function parametersPhoto(data){
    const dataPost = data;

    for(const name in data) {
        dataPost.append(name, data[name]);
      }
    
    try{
        const reponse = await fetch(`http://localhost:5678/api/works`,{
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${JSON.parse( window.localStorage.getItem('loginInfo'))?.token}`
              },
              body: dataPost,
              method: "POST",
        })
        const data = await reponse.json();


        document.querySelector('#modal-add').classList.remove('show');
        document.querySelector('.content-photo-encart > div').classList.remove('hidden')
        document.querySelector('.content-photo-encart .img-select').remove()
        document.querySelector('#text_search').value = ''
        window.initGalerie();
        window.initEdit()

        return data;
    } catch(error){
        console.error(error);
    }
}
