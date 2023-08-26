import { createAction } from '@reduxjs/toolkit';
import { TOffer, TOfferDescription} from '../types/offer';
import { TReview } from '../types/review';
import { AppRoute } from '../const';

export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadOfferById = createAction<TOfferDescription>('loadOfferById');

export const loadNearbyOffers = createAction<TOffer[]>('loadNearbyOffers');

export const loadFavorites = createAction<TOffer[]>('loadFavorites');

export const loadComments = createAction<TReview[]>('loadComments');

export const sendComment = createAction<Comment>('sendComment');
