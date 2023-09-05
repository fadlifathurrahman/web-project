const availStatus = "Available at store";
const coffeePrice = [25, 30, 20, 30, 30, 25, 20, 419, 145, 310, 630];

const productsTitle = {
  title: [
    {
      product_title: "Coffee Drinks",
      product_desc:
        "With our experience, we claim that one of our expertise is creating coffee-based beverage variants. There are many variants of coffee drinks for all ages. Starting from Espresso and Manual Brew for you true coffee lovers",
    },
    {
      product_title: "Coffee Equipment",
      product_desc:
        "Experience making your own coffee with professional coffee making equipment. Adequate equipment can certainly create maximum results, and now we present to you our best coffee equipment",
    },
    {
      product_title: "Coffee Packs",
      product_desc:
        "Now you can easily enjoy specialty coffee with various characters, aromas and flavors from various coffee-producing regions in Indonesia available at our nearest outlets",
    },
    {
      product_title: "Coffee Merchandise",
      product_desc:
        "We are proud to collaborate with local craftsmen to make all coffee toffee merchandise with the best design and quality so that you can all be more stylish and cool, so get a collection of coffee toffee merchandise right away",
    },
  ],
};

const getMain = document.getElementById("products-all");
for (let c = 0; c < 4; c++) {
  const makeSection = document.createElement("section");
  makeSection.className = "the-products";
  makeSection.id = `products-${c}`;
  getMain.appendChild(makeSection);

  const titleSection = document.getElementById(`products-${c}`);
  const makeArticle = document.createElement("article");
  makeArticle.className = "products-title";
  makeArticle.id = `title-products-${c}`;
  titleSection.appendChild(makeArticle);

  const getArticle = document.getElementById(`title-products-${c}`);
  const makeTitle = document.createElement("h1");
  makeTitle.innerText = productsTitle.title[c].product_title;
  getArticle.appendChild(makeTitle);

  const makeDesc = document.createElement("p");
  makeDesc.innerText = productsTitle.title[c].product_desc;
  getArticle.appendChild(makeDesc);

  const getSectionContainner = document.getElementById(`products-${c}`);
  const makeSectionContainer = document.createElement("section");
  makeSectionContainer.id = `products-container-${c}`;
  makeSectionContainer.className = "products-container";
  getSectionContainner.appendChild(makeSectionContainer);
}

fetch("https://fadli-coffee-api.herokuapp.com/api/v1/products")
  .then((response) => response.json())
  .then((json) => {
    json.products.forEach((product, a) => {
      const pc0 = document.getElementById("products-container-0");
      const pc1 = document.getElementById("products-container-1");

      const arti = document.createElement("article");
      arti.id = product.product_id;
      arti.className = "products";

      if (a < 7) {
        pc0.appendChild(arti);
      } else {
        pc1.appendChild(arti);
      }

      const border = document.createElement("span");
      border.className = "products-border";
      arti.appendChild(border);

      const coffeeImage = document.createElement("img");
      coffeeImage.src = product.product_image;
      coffeeImage.className = "products-picture";
      border.appendChild(coffeeImage);

      const coffeDesc = document.createElement("div");
      coffeDesc.className = "products-description";
      arti.appendChild(coffeDesc);

      const coffeName = document.createElement("h2");
      coffeName.className = "products-name";
      coffeName.innerText = product.product_name;
      coffeDesc.appendChild(coffeName);

      const description = document.createElement("p");
      description.className = "products-desc";
      description.innerText = product.description;
      coffeDesc.appendChild(description);

      const pricing = document.createElement("p");
      pricing.className = "products-price";
      pricing.innerText = (coffeePrice[a] * 1000).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      coffeDesc.appendChild(pricing);

      const avail = document.createElement("p");
      avail.className = "products-available";
      avail.innerText = availStatus;
      coffeDesc.appendChild(avail);
    });
  });

const packPrice = ["48", "96", "74"];

const pack = {
  products: [
    {
      product_name: "Coffe Pack",
      description:
        "There are several single origin arabica specialty with unique flavors ",
      product_image: "../../media/pack-1.png",
    },
    {
      product_name: "Limited Stock",
      description:
        "Specialty rare coffee beans that are only available at certain times",
      product_image: "../../media/pack-2.png",
    },
    {
      product_name: "Coffee Banking",
      description:
        "By buying 1 pack of coffee banking you can leave the coffee pack to our barista",
      product_image: "../../media/pack-3.png",
    },
  ],
};

for (let d = 0; d < 3; d++) {
  const getPackSection = document.getElementById("products-container-2");
  const makePackArticle = document.createElement("article");
  makePackArticle.id = `pack-${d}`;
  makePackArticle.className = "products";
  getPackSection.appendChild(makePackArticle);

  const packBorder = document.createElement("span");
  packBorder.className = "products-border";
  makePackArticle.appendChild(packBorder);

  const packImage = document.createElement("img");
  packImage.src = pack.products[d].product_image;
  packImage.className = "products-picture";
  packBorder.appendChild(packImage);

  const packDesc = document.createElement("div");
  packDesc.className = "products-description";
  makePackArticle.appendChild(packDesc);

  const packName = document.createElement("h2");
  packName.className = "products-name";
  packName.innerText = pack.products[d].product_name;
  packDesc.appendChild(packName);

  const packDescription = document.createElement("p");
  packDescription.className = "products-desc";
  packDescription.innerText = pack.products[d].description;
  packDesc.appendChild(packDescription);

  const packPricing = document.createElement("p");
  packPricing.className = "products-price";
  packPricing.innerText = `Rp. ${packPrice[d]}.000,00`;
  packDesc.appendChild(packPricing);

  const avail = document.createElement("p");
  avail.className = "products-available";
  avail.innerText = availStatus;
  packDesc.appendChild(avail);
}

const merchPrice = ["25", "54", "18"];

const merchandise = {
  products: [
    {
      product_name: "Keychain",
      description:
        "Unique and cute keychain, with the theme of various coffee equipment and love",
      product_image: "../../media/merch-1.jpg",
    },
    {
      product_name: "Tshirt",
      description:
        "Various t-shirt designs with the theme of love for the world of coffee",
      product_image: "../../media/merch-2.jpg",
    },
    {
      product_name: "Pin",
      description:
        "Various cute and unique pins with the theme pride of Indonesian coffee",
      product_image: "../../media/merch-3.jpg",
    },
  ],
};

for (let e = 0; e < 3; e++) {
  const getMerchSection = document.getElementById("products-container-3");
  const makeMerchArticle = document.createElement("article");
  makeMerchArticle.id = `merch-${e}`;
  makeMerchArticle.className = "products";
  getMerchSection.appendChild(makeMerchArticle);

  const merchBorder = document.createElement("span");
  merchBorder.className = "products-border";
  makeMerchArticle.appendChild(merchBorder);

  const merchImage = document.createElement("img");
  merchImage.src = merchandise.products[e].product_image;
  merchImage.className = "products-picture";
  merchBorder.appendChild(merchImage);

  const merchDesc = document.createElement("div");
  merchDesc.className = "products-description";
  makeMerchArticle.appendChild(merchDesc);

  const merchkName = document.createElement("h2");
  merchkName.className = "products-name";
  merchkName.innerText = merchandise.products[e].product_name;
  merchDesc.appendChild(merchkName);

  const merchDescription = document.createElement("p");
  merchDescription.className = "products-desc";
  merchDescription.innerText = merchandise.products[e].description;
  merchDesc.appendChild(merchDescription);

  const merchPricing = document.createElement("p");
  merchPricing.className = "products-price";
  merchPricing.innerText = `Rp. ${merchPrice[e]}.000,00`;
  merchDesc.appendChild(merchPricing);

  const avail = document.createElement("p");
  avail.className = "products-available";
  avail.innerText = availStatus;
  merchDesc.appendChild(avail);
}
