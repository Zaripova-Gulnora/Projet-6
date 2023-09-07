async function init() {
  const datas = await getCategories();

  const categoriesSection = document.querySelector(".categories");

 if (categoriesSection){
  await datas.forEach((data) => {
    let categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.dataset.category = data.id;

    categoryDiv.innerHTML = `<span> ${data.name}</span>`;

    categoriesSection.appendChild(categoryDiv);

    categoryDiv.addEventListener("click", function (event) {
      onClickCategory(event, data.id);
    });
  });

  document
    .querySelector(".categories #all")
    .addEventListener("click", function (event) {
      onClickCategory(event, "all");
    });
 }
}

function onClickCategory(event, idCategory) {
  toggleActiveClass(event);
  toggleGalerieElement(idCategory);
}

function toggleActiveClass(event) {
  document.querySelector(".categories .active").classList.remove("active");
  event.target.classList.add("active");
}

function toggleGalerieElement(idCategory) {
  const galeryElements = document.querySelectorAll(".galerieArt");

  galeryElements.forEach((element) => {
    if (idCategory === "all") {
      element.style.display = "block";
      return true;
    }

    if (parseInt(element.dataset.category) === idCategory) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

init();
