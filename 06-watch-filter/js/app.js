//DATA
import { data } from "../data/data.js";
//console.log(data)

//DOM ELEMENTS

let searchInp = document.getElementById("search");
let priceRange = document.querySelector(".priceRange");
let priceValue = document.querySelector(".priceValue");
let productsContainer = document.querySelector(".products");
let catContainer = document.querySelector(".cats");

const displayProducts = (filteredData) => {
  let showFilteredData = filteredData
    .map(
      (product) =>
        `<div class="product">
        <img src="${product.img}" alt="${product.name}">
        <span class="name">${product.name}</span>
        <span class="price">${product.price}</span>
    </div>`
    )
    .join("");
  productsContainer.innerHTML = showFilteredData;
};

displayProducts(data);

searchInp.addEventListener("keyup", (e) => {
  let searchedValue = e.target.value.toLowerCase().trim();

  if (searchedValue) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().includes(searchedValue))
    );
  } else {
    displayProducts(data);
  }
});

catContainer.addEventListener("click", (e) => {
  let selectedCat = e.target.textContent;

  //  console.log(selectedCat);

  selectedCat == "All"
    ? displayProducts(data)
    : displayProducts(data.filter((item) => item.cat == selectedCat));
});

priceRange.addEventListener("input", (e) => {
  let value = e.target.value;
  displayProducts(data.filter((item) => item.price <= value));
  priceValue.textContent = `${value}$`;
});

const setCategories = () => {
  let allCategories = data.map((item) => item.cat);

  //  console.log(allCategories);

  let filteredCategories = [...new Set(allCategories)];

  filteredCategories = ["All", ...filteredCategories];

  //  console.log(filteredCategories);
  catContainer.innerHTML = filteredCategories
    .map((cat) => `<span class="cat-item">${cat}</span>`)
    .join("");
};

setCategories();

const setPrice = () => {
  let allPrices = data.map((item) => item.price);
  let maxPrice = Math.max(...allPrices);
  let minPrice = Math.min(...allPrices);
  priceRange.max = maxPrice;
  priceRange.min = minPrice;
  priceRange.value = maxPrice;

  priceValue.textContent = `${maxPrice}$`;
};
setPrice();
