// import { createReducer } from '@reduxjs/toolkit';
// import { TOffer, TOfferDescription } from '../types/offer';
// import { TReview, Comment } from '../types/review';
// import {
//   changeCity, fillOffersList, changeSortType, setError,
//   setOffersDataLoadingStatus,
//   loadNearbyOffers, loadOfferById, loadFavorites,
//   loadComments, sendComment
// } from './action';
// import { fetchOfferByIdAction } from './api-actions';
// import { RequestStatus } from '../const';


// type InitialStateType = {
//   favorites: TOffer[];
//   offer: TOfferDescription | null;
//   offerFetchingStatus: RequestStatus;
//   nearbyOffers: TOffer[];
//   comments: TReview[];
//   comment: Comment | null;
// }

// const InitialState: InitialStateType = {
//   favorites: [],
//   offer: null,
//   offerFetchingStatus: RequestStatus.Idle,
//   nearbyOffers: [],
//   comments: [],
//   comment: null,
// };

// const reducer = createReducer(InitialState, (builder) => {
//   builder
//     .addCase(fillOffersList, (state, action) => {
//       state.offers = action.payload.offers;
//     })
//     .addCase(setOffersDataLoadingStatus, (state, action) => {
//       state.isOffersDataLoading = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     .addCase(loadOfferById, (state, action) => {
//       state.offer = action.payload;
//     })
//     .addCase(loadNearbyOffers, (state, action) => {
//       state.nearbyOffers = action.payload;
//     })
//     .addCase(loadFavorites, (state, action) => {
//       state.favorites = action.payload;
//     })
//     .addCase(fetchOfferByIdAction.pending, (state) => {
//       state.offerFetchingStatus = RequestStatus.Pending;
//     })
//     .addCase(fetchOfferByIdAction.fulfilled, (state) => {
//       state.offerFetchingStatus = RequestStatus.Success;
//     })
//     .addCase(fetchOfferByIdAction.rejected, (state) => {
//       state.offerFetchingStatus = RequestStatus.Error;
//     })
//     .addCase(loadComments, (state, action) => {
//       state.comments = action.payload;
//     })
//     .addCase(sendComment, (state, action) => {
//       state.comment = action.payload;
//     });
// });

// export { reducer };
