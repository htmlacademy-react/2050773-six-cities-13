import { SortType } from './const';
import { TOffer } from './types/offer';

export const sorting = {
  [SortType.Popular]: (offers: TOffer[]) => offers,
  [SortType.PriceLow]: (offers: TOffer[]) => Array.from(offers.values()).sort((a, b) => a.price - b.price),
  [SortType.PriceHigh]: (offers: TOffer[]) => Array.from(offers.values()).sort((a, b) => b.price - a.price),
  [SortType.TopRated]: (offers: TOffer[]) => Array.from(offers.values()).sort((a, b) => b.rating - a.rating),
};
