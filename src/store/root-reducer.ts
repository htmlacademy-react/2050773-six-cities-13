import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process.slice';
import { offersProcess } from './offers-process/offers-process.slice';
import { offerIdProcess } from './offer-id-process/offer-id-process.slice';
import { favoriteProcess } from './favorites-process/favorites-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.OfferById]: offerIdProcess.reducer,
  [NameSpace.Favorites]: favoriteProcess.reducer,
});
