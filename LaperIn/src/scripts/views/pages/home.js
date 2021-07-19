import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
        <article>
            <div class="list">
                <h1 class="list__title">RESTAURANT LISTS</h1>    
                <p class="list__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
            <div class="resto__list" id="resto__list"></div>
        </article>
    </section>
    `;
  },

  async afterRender() {
    const heroElement = document.querySelector('#heroContainer');
    const infoElement = document.querySelector('#infoContainer');

    heroElement.style.display = 'block';
    infoElement.style.display = 'block';

    heroElement.innerHTML = `
      <div id="hero" class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">LaperIn</h1>
            <a href="#main"><button class="hero__btn">Telusuri</button></a>
        </div>
      </div>
    `;
    infoElement.innerHTML = `
      <div class="info">
          <h1 class="info__title">OUR FEATURES</h1>
          <p class="info__desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
      </div>
      <div class="additional__bg"><div class="bg1"></div></div>
    `;
    const restaurants = await RestaurantSource.home();
    const restoListElement = document.querySelector('#resto__list');

    restaurants.forEach((restaurant) => {
      restoListElement.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
