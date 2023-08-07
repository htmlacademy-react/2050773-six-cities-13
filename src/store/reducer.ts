import { createReducer } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { changeCity, fillOffersList } from './action';

const DEFAULT_CITY = 'Paris';

type InitialStateType = {
  city: string;
  offers: TOffer[];
}

const InitialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer };
