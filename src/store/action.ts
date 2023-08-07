import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';

export const changeCity = createAction<{city: string}>('changeCity');
export const fillOffersList = createAction<{offers: TOffer[]}>('fillOffersList');
