import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { SortType } from '../const';

export const changeCity = createAction<{city: string}>('changeCity');
export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');
export const changeSortType = createAction<{type: SortType}>('changeSortType');
