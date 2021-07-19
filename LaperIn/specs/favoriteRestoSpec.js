import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Favorite Resto Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllRestos()).forEach(async (resto) => {
      await FavoriteResto.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
