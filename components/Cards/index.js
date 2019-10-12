// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Pull articles from Backend
const getArticles = callback => {
  axios
    .get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => callback(response))
    .catch(error => console.log(error));
};

// Inspect Data
const logData = ({ data }) => {
  console.log(data.articles);
};

// Set-up DOM Elements
const cardContainer = (data, topic) => {
  articlesContainer = document.querySelector('.cards-container');
  data.articles[`${topic}`].forEach(article => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-topic', `${topic}`);

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;
    card.appendChild(headline);

    let author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    let authorImgContainer = document.createElement('div');
    authorImgContainer.classList.add('img-container');
    author.appendChild(authorImgContainer);
    let authorPhoto = document.createElement('img');
    authorPhoto.src = article.authorPhoto;
    authorImgContainer.appendChild(authorPhoto);
    let authorName = document.createElement('span');
    authorName.textContent = `By ${article.authorName}`;
    author.appendChild(authorName);

    articlesContainer.appendChild(card);
  });
};

const bootstrapArticles = ({ data }) => {
  cardContainer(data, 'bootstrap');
};

const javascriptArticles = ({ data }) => {
  cardContainer(data, 'javascript');
};

const jqueryArticles = ({ data }) => {
  cardContainer(data, 'jquery');
};

const nodeArticles = ({ data }) => {
  cardContainer(data, 'node');
};

const technologyArticles = ({ data }) => {
  cardContainer(data, 'technology');
};

getArticles(logData);
getArticles(bootstrapArticles);
getArticles(javascriptArticles);
getArticles(jqueryArticles);
getArticles(nodeArticles);
getArticles(technologyArticles);
