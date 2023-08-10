import { createReducer } from '@reduxjs/toolkit';
import { TOffer } from '../types/offer';
import { changeCity, fillOffersList, changeSortType, requireAuthorization } from './action';
import { SortType, AuthorizationStatus } from '../const';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = SortType.Popular;

type InitialStateType = {
  city: string;
  offers: TOffer[];
  sortType: SortType;
  authorizationStatus: AuthorizationStatus;
}

const InitialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
