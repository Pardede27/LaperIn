import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto(1);

    expect(resto).toEqual({ id: 1 });
    FavoriteResto.deleteResto(1);
  });

  it('should not add a restautant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteResto.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllRestos()).toEqual([{ id: 1 }]);

    FavoriteResto.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllRestos()).toEqual([]);
  });
});
