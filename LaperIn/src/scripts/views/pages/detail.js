import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteResto from '../../data/favorite-resto';

const Detail = {

  async render() {
    return `
      <div id="likeButtonContainer"></div>
      <div class="detail-container" id="detailContainer"></div>
    `;
  },

  async afterRender() {
    const heroElement = document.querySelector('#heroContainer');
    const infoElement = document.querySelector('#infoContainer');

    heroElement.style.display = 'none';
    infoElement.style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#detailContainer');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteResto,
      resto: {
        id: resto.restaurant.id,
        pictureId: resto.restaurant.pictureId,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
