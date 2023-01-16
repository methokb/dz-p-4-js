let row = document.querySelector(".row");
fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((show) => {
    show.forEach((item) => {
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
