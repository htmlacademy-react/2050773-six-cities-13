import { createAction } from '@reduxjs/toolkit';
import { TOffer, TOfferDescription} from '../types/offer';
import { TReview } from '../types/review';
import { SortType } from '../const';
import { AppRoute } from '../const';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');

export const changeSortType = createAction<{type: SortType}>('changeSortType');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const loadOfferById = createAction<TOfferDescription>('loadOfferById');

export const loadNearbyOffers = createAction<TOffer[]>('loadNearbyOffers');

export const loadFavorites = createAction<TOffer[]>('loadFavorites');

export const loadComments = createAction<TReview[]>('loadComments');

export const sendComment = createAction<Comment>('sendComment');
