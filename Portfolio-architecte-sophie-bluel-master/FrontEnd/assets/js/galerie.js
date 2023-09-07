async function init() {

  const galerieSection = document.querySelector(".gallery");
  const galerieSectionChilds = document.querySelectorAll(".gallery .galerieArt")

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
            <img src=${data.imageUrl} alt=${data.title}>
            <figcaption>${data.title}</figcaption>
        </figure>`;

    galerieSection.appendChild(galerieDiv);
  });
}

init()

window.initGalerie = init;
