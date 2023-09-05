const category = [
      {
            category_image: "../../media/coffe-1.jpg",
            category_name: "Coffee Drinks",
            category_desc: "From traditional espresso-based drinks to a variety of the latest coffee blends.",
            category_link: "Coffee drinks"
      },
      {
            category_image: "../../media/coffe-2.png",
            category_name: "Coffee Equipment",
            category_desc: "The highest quality equipment to make the best cup of coffee",
            category_link: "Coffee equipment"
      },
      {
            category_image: "../../media/pack-1.png",
            category_name: "Coffee Packs",
            category_desc: "In a 200gr package, you can enjoy special Arabica Coffee Toffee coffee at home",
            category_link: "Coffee packs"
      },
      {
            category_image: "../../media/merch-3.jpg",
            category_name: "Coffee Merchandise",
            category_desc: "Wide selection of merchandise to show your love (or madness) for the world of coffee",
            category_link: "Merchandise"
      }
];

const categoryContent = document.getElementById("category-content");

const buttonTitle = ["coffe drinks", "coffe equipment", "coffee packs", " merchandise"]

for (let b = 0; b < 4; b++) {
      const divCategory = document.createElement("div");
      divCategory.className = "categories";
      categoryContent.appendChild(divCategory);

      const spanBorder = document.createElement("span");
      spanBorder.className = "category-border";
      divCategory.appendChild(spanBorder);

      const imageCategory = document.createElement("img");
      imageCategory.src = category[b].category_image;
      imageCategory.className = "category-picture";
      imageCategory.title = `${buttonTitle[b]}`;
      spanBorder.appendChild(imageCategory);

      const spanDesc = document.createElement("span");
      spanDesc.className = "category-description";
      divCategory.appendChild(spanDesc);

      const categoryName = document.createElement("h2");
      categoryName.innerText = category[b].category_name;
      spanDesc.appendChild(categoryName);

      const categoryDesc = document.createElement("p");
      categoryDesc.innerText = category[b].category_desc;
      spanDesc.appendChild(categoryDesc);

      const categoryButton = document.createElement("a");
      categoryButton.className = "category-button";
      categoryButton.innerHTML = "&#9982; " + category[b].category_link + " catalog";
      categoryButton.href = `../Product/product.html#products-${b}`;
      categoryButton.title = `Show ${buttonTitle[b]} catalog`;
      spanDesc.appendChild(categoryButton);
      
}