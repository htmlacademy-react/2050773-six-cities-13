import { NameSpace, SortType } from '../../const';
import { TOffer } from '../../types/offer';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getOffers = (state: State): TOffer[] => state[NameSpace.Offers].offers;
export const getSortType = (state: State): SortType => state[NameSpace.Offers].sortType;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
