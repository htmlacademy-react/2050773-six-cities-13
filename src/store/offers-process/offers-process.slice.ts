import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../const';
import { OffersProcess } from '../../types/state';
import { fetchChangeStatusFavoriteAction, fetchOffersAction } from '../api-actions';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT = SortType.Popular;

const initialState: OffersProcess = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT,
  isOffersDataLoading: false,
  error: false,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction) => {
      state.sortType = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
        state.error = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.error = true;
      })
      .addCase(fetchChangeStatusFavoriteAction.fulfilled, (state, action) => {
        state.offers = state.offers.reduce((acc, offer) => {
          if (offer.id === action.payload.id) {
            return [...acc, {...offer,
              isFavorite: !offer.isFavorite}];
          }
          return [...acc, offer];
        }, []);
      });
  }
});

export const {changeCity, changeSortType} = offersProcess.actions;
