import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferIdProcess } from '../../types/state';
import { fetchOfferByIdAction, fetchNearbyOffersAction, fetchCommentsAction, fetchSendCommentAction, fetchChangeStatusFavoriteAction } from '../api-actions';

const initialState: OfferIdProcess = {
  offer: null,
  isOfferDataLoading: false,
  nearbyOffers: [],
  comments: [],
  comment: null,
  hasError: false,
};

export const offerIdProcess = createSlice({
  name: NameSpace.OfferById,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.offerFetchingStatus = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerFetchingStatus = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.offerFetchingStatus = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.offerFetchingStatus = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.offerFetchingStatus = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.offerFetchingStatus = false;
      })
      .addCase(fetchSendCommentAction.pending, (state) => {
        state.offerFetchingStatus = true;
      })
      .addCase(fetchSendCommentAction.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.offerFetchingStatus = false;
      })
      .addCase(fetchSendCommentAction.rejected, (state) => {
        state.offerFetchingStatus = false;
        state.hasError = true;
      }).addCase(fetchChangeStatusFavoriteAction.fulfilled, (state) => {
        state.offer = {...state.offer,
          isFavorite: !state.offer?.isFavorite
        };
      });
  }
});
