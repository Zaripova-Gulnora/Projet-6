async function init() {

  const galerieSection = document.querySelector(".edit-photo");

  const galerieSectionChilds = document.querySelectorAll(".edit-photo .galerieArt")

  if(galerieSectionChilds.length > 0){
    galerieSectionChilds.forEach((child, index) => {
      child.remove()
    })
  }

  const datas = await getGalerie();

  await datas.forEach((data) => {
    let galerieDiv = document.createElement("div");
    galerieDiv.classList.add("galerieArt");
    galerieDiv.dataset.category = data.category.id;

    galerieDiv.innerHTML = `<figure data-id=${data.id}>
                <div class="image-modal">
                    <div class="poubelle">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <img src=${data.imageUrl} alt=${data.title}>
                </div>
                <figcaption> éditer </figcaption>
            </figure>`;

    galerieSection.appendChild(galerieDiv);

    onClickTrash(data.id);
  });

  // addPicture();
}
init();

window.initEdit = init;

function onClickTrash(id) {
  document
    .querySelector(`figure[data-id="${id}"] .poubelle`)
    .addEventListener("click", async () => {
      const datas = await deletePhoto(id);
      if (datas.error === undefined) {
        document
          .querySelector(`.edit-photo figure[data-id="${id}"]`)
          .parentNode.remove();
        document
          .querySelector(`.gallery figure[data-id="${id}"]`)
          .parentNode.remove();
      }
    });
}

const form = document.querySelector(`#addPhoto_form`);


  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));


    const datas = await parametersPhoto(formData);
  });