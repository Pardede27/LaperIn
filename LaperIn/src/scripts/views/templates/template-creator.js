import CONFIG from '../../globals/config';
import DetailInitiator from '../../utils/detail-initiator';

const createRestoDetailTemplate = (restaurant) => `
    <div class="detail-picture">
        <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.restaurant.pictureId}" alt="gambar restoran ${restaurant.restaurant.name}">
    </div>
    <div class="more-info-container">
    <div class="detail-description">
        <h1>${restaurant.restaurant.name}</h1>
        <p>${restaurant.restaurant.description}</p>
    </div>
    <div class="main-info">
        <div class="menus">
            <h2>Menus</h2>
                <h3>🍔Food🍔</h3>
                    ${DetailInitiator.initMenu(restaurant.restaurant.menus.foods)}
                <h3>☕Drink☕</h3>
                    ${DetailInitiator.initMenu(restaurant.restaurant.menus.drinks)}
        </div>
        <div class="other-info">
            <h2>Other Information</h2>
            <h3>Categories:</h3>
                ${DetailInitiator.initCategories(restaurant.restaurant.categories)}
            <h3>City:</h3>
                <p>${restaurant.restaurant.city}</p>
            <h3>Adress:</h3>
                <p>${restaurant.restaurant.address}</p>
            <h3>Rating:</h3>
                <p>${restaurant.restaurant.rating}</p>
        </div>
    </div>
    <div class="detail-review">
        <h1>Customer's Reviews</h1>
        ${DetailInitiator.initReview(restaurant.restaurant.customerReviews)}
    </div>
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
    <div class="resto__card" tabindex=0>
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="gambar restoran ${restaurant.name}">
      <div class="resto__content">
          <h2 class="resto__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
          <p class="resto__desc">${restaurant.description}</p>
          <div class="resto__additional">
              <p class="tab">City&emsp;&ensp;: ${restaurant.city}</p>
              <p class="tab">Rating&ensp;: ${restaurant.rating}</p>
          </div> 
      </div>    
    </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const restoItemNotFoundTemplate = () => `
  <div id="itemNotFound" class="item__not-found">
      <p>Tidak ada restaurant untuk ditampilkan!</p>
  </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  restoItemNotFoundTemplate,
};
