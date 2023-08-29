import { NameSpace } from '../../const';
import { TOffer, TOfferDescription } from '../../types/offer';
import { Comment, TReview } from '../../types/review';
import { State } from '../../types/state';

export const getOfferById = (state: State): TOfferDescription => state[NameSpace.OfferById].offer;
export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.OfferById].isOfferDataLoading;
export const getNearbyOffers = (state: State): TOffer[] => state[NameSpace.OfferById].nearbyOffers;
export const getComments = (state: State): TReview[] => state[NameSpace.OfferById].comments;
export const sendComment = (state: State): Comment => state[NameSpace.OfferById].comment;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
