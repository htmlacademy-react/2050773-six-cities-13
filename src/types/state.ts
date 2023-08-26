import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { TOffer } from './offer';
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
