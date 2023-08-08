import { createReducer } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { changeCity, fillOffersList, changeSortType } from './action';
import { SortType } from '../const';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = SortType.Popular;

type InitialStateType = {
  city: string;
  offers: TOffer[];
  sortType: SortType;
}

const InitialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT
};

const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload.type;
    });
});

export { reducer };
