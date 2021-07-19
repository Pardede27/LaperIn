const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan!', '.item__not-found');
 
  I.amOnPage('/');

  I.seeElement('.resto__content h2 a');
  const firstResto = locate('.resto__content h2 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.resto__card');

  const likedRestoTitle = await I.grabTextFrom('.resto__title');
 
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan!', '.item__not-found');
 
  I.amOnPage('/');

  I.seeElement('.resto__content h2 a');
  const firstResto = locate('.resto__content h2 a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.resto__card');

  const likedRestoTitle = await I.grabTextFrom('.resto__title');
 
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  pause();
  const firstFavResto = locate('.resto__content h2 a').first();
  I.click(firstFavResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada restaurant untuk ditampilkan!', '.item__not-found');
});
