//Data
import { newsData } from "../data/news.js";
//console.log(newsData);
const newsDiv = document.getElementById("news");
// Take the data - put into the cards;
const loadData = () => {
  let str = "";

  newsData.forEach((item) => {
    str += createNewsCard(item);
  });
  document.getElementById("news").innerHTML = str;
};

//Create card and assign the data to related fields

const createNewsCard = (item) => {
  let like = createLike(item.like);
  return `
    <div class = "col">
        <div class= "card h-100" data-id="${item.id}">
            <img src="${item.image}" class="card-img-top stlye="width=350px; height=350px; object-fit:cover" alt="${item.title}">
            <div class="card-body">
                <h4 class="card-title">${item.title}</h4>
                <h5 class="card-text text-danger">${like}</h5>
                <p>${item.description}</p>
            </div>
        </div>
    </div>
    `;
};
//Add like logic
const createLike = (likeScore, likeLimit = 5) => {
  let likeHearts = "";
  for (let i = 0; i < likeLimit; i++) {
    if (i < likeScore) {
      likeHearts += `<i class="fa-solid fa-heart me-1"></i>`;
    } else {
      likeHearts += `<i class="fa-regular fa-heart me-1"></i>`;
    }
  }
  return likeHearts;
};
// Bring the content
newsDiv.addEventListener("click", (e) => {
  let newsId = e.target.closest(".card").dataset.id; // getAttribute("data-id")
  //console.log(newsId, typeof (newsId));

  let filterNews = newsData.find((item) => item.id === Number(newsId));
  // OR // let filterNews = newsData.filter((item) => item.id == newsId)

  let newsDetails = createNewsDetails(filterNews);
  document.getElementById("newsDetails").innerHTML = newsDetails;
  window.scrollTo(0, 0);
});

const createNewsDetails = (item) => {
  let like = createLike(item.like);
  return `

    <div class="col">
        <img src="${item.image}" class="img-fluid rounded" alt="${item.title}">
    </div>

    <div class = "col">
       <h3 class="mt-3">${item.title}</h3>
       <span>${like}</span>
       <h5>${item.description}</h5>
       <p>${item.content}</p>
    </div>
    `;
};

// ---card
// --------card header/card-img-top
//----------- card-body
//------------- card-title
//-------------- card-text
//-------------- card-img bottom
//--------------- card-footer

loadData();
