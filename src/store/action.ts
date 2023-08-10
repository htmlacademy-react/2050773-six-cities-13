import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { SortType } from '../const';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');

export const changeSortType = createAction<{type: SortType}>('changeSortType');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');

