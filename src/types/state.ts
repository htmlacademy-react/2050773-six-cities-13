import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { TOffer, TOfferDescription } from './offer';
import { TReview } from './review';
import { SortType } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type OffersProcess = {
  city: string;
  offers: TOffer[];
  sortType: SortType;
  isOffersDataLoading: boolean;
  error: boolean;
}

export type OfferIdProcess = {
  offer: TOfferDescription | null;
  isOfferDataLoading: boolean;
  nearbyOffers: TOffer[];
  comments: TReview[];
  comment: Comment | null;
  hasError: boolean;
}

export type FavoriteProcess = {
  favorites: TOffer[];
  isFavoritesDataLoading: boolean;
}
