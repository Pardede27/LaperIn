import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate, restoItemNotFoundTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <div class="favorite-container">
        <div class="info" style="margin-top: 50px;">
            <h1 class="info__title">YOUR FAVORITE RESTAURANTS</h1>
            <p class="info__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <section class="content">
        <article>
            <div class="resto__list" id="resto__list"></div>
        </article>
    </section>
    </div>
    `;
  },

  async afterRender() {
    const heroElement = document.querySelector('#heroContainer');
    const infoElement = document.querySelector('#infoContainer');

    heroElement.style.display = 'none';
    infoElement.style.display = 'none';

    const restaurants = await FavoriteResto.getAllRestos();
    const restoListElement = document.querySelector('#resto__list');
    const favoritesContent = document.querySelector('.content');

    if (restaurants.length === 0) {
      favoritesContent.innerHTML += restoItemNotFoundTemplate();
    } else {
      restaurants.forEach((restaurant) => {
        restoListElement.innerHTML += createRestoItemTemplate(restaurant);
      });
    }
  },
};

export default Favorites;
