import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteProcess } from '../../types/state';
import { fetchFavoritesAction } from '../api-actions';

const initialState: FavoriteProcess = {
  favorites: [],
  isFavoritesDataLoading: false,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesDataLoading = false;
      });
  }
});
