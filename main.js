let btn1 = document.querySelector(".btn1");
let menu = document.querySelector(".menu");
// let menuItems = document.querySelectorAll(".menu-item");
let row = document.querySelector(".row");
// let row2 = document.querySelector(".row2")
const getProducts = (category) => {
  fetch(`https://api.escuelajs.co/api/v1/products/${category === "all" ? "" : "category/" + category}`)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((item) => {
        row.innerHTML += `
            <div class="card">
                <img src="${item.category.image}" class="images"/>
                <p>${item.title}</p>
                <p>${item.description}</p>
                <h1>${item.category.name}</h1>
                
                <span><i>${item.price}</i></span>
            </div>
        `;
      });
    });
};
getProducts("all");

const getCategories = () => {
  fetch(`https://api.escuelajs.co/api/v1/products/categories/`)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((item) => {
        menu.innerHTML += `
      <li class= "menu-item">${item.category.name}</li>
        `
      })
      let menuItems = document.querySelectorAll(".menu-item");

  Array.from(menuItems).forEach((item) => {
    item.addEventListener("click", () => {
      row.innerHTML = "";
      getProducts(item.textContent);
    });
  });

    });


};
getCategories();
