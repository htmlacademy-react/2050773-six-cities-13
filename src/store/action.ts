import { createAction } from '@reduxjs/toolkit';
import { TOffer} from '../types/offer';
import { AppRoute } from '../const';

export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadFavorites = createAction<TOffer[]>('loadFavorites');
