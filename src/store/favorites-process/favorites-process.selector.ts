import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { TOffer } from '../../types/offer';

export const getFavorites = (state: State): TOffer[] => state[NameSpace.Favorites].favorites;
export const getFavoritesDataLoadingStatus = (state: State): boolean => state[NameSpace.Favorites].isFavoritesDataLoading;
export const getFavoritesCount = (state: State): number => state[NameSpace.Offers].offers.filter((offer) => offer.isFavorite).length;
