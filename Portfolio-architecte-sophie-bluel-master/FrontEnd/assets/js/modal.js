document.querySelector('#edit-modal').addEventListener('click', () => {
    document.querySelector('#modal-galery').classList.add('show');

    document.querySelector('#modal-galery .modal-close').addEventListener('click', () => {
        document.querySelector('#modal-galery').classList.remove('show');

    })

})


document.querySelector(`.button-add`).addEventListener('click', (e) => {
    e.preventDefault()
        document.querySelector('#modal-galery').classList.remove('show');

        document.querySelector('#modal-add').classList.add('show');

        document.querySelector('#modal-add .modal-close').addEventListener('click', () => {
            document.querySelector('#modal-add').classList.remove('show');

            

            document.querySelector('.content-photo-encart > div').classList.remove('hidden')
            document.querySelector('#text_search').value = ''
            if(document.querySelector('.content-photo-encart .img-select')) {
                document.querySelector('.content-photo-encart .img-select').remove()
                
            }
        })
})

document.querySelector(`.arrow`).addEventListener('click', () => {
    document.querySelector('#modal-add').classList.remove('show');
    document.querySelector('#modal-galery').classList.add('show');

    document.querySelector('.content-photo-encart > div').classList.remove('hidden')
    if(document.querySelector('.content-photo-encart .img-select')) {
        document.querySelector('.content-photo-encart .img-select').remove()
    }
})

document.querySelector(`#button-add-photo`).addEventListener('click', () => { 
    document.querySelector('#photo').click();
})

document.querySelector('#photo').addEventListener('change', (e) => {
    const file = e.target.files[0]

    const img = document.createElement("img")
    img.classList.add('img-select')
    img.file = file
    document.querySelector('.content-photo-encart > div').classList.add('hidden')
    document.querySelector('.content-photo-encart').appendChild(img)

    const reader = new FileReader();
    reader.onload = (e) => {
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);

    // if(){
    //     document.querySelector('.').classList.add('bg-green')
    // }
})

document.querySelector('#modal-add #button-validation').addEventListener('click', (e) => {
    document.querySelector('#addPhoto_form').requestSubmit();
})

const inputs = document.querySelectorAll('#addPhoto_form input')
inputs.forEach((element, index) => {
    const events = ['change','keyup']
    events.forEach( evt => 
        element.addEventListener(evt, (e) => {
            if(inputs[0]?.files?.length && inputs[1].value.length){
                document.querySelector('#modal-add #button-validation').classList.add('btn-bg-green')
            } else {
                document.querySelector('#modal-add #button-validation').classList.remove('btn-bg-green')
            }
        })
    );
})
