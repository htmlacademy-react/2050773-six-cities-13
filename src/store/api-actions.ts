import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { TOffer } from '../types/offer';
import { APIRoute, AuthorizationStatus } from '../const';
import { fillOffersList, requireAuthorization, setOffersDataLoadingStatus } from './action';
import { dropToken } from '../services/token';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
      dispatch(setOffersDataLoadingStatus(true));
      const {data} = await api.get<TOffer[]>(APIRoute.Offers);
      dispatch(setOffersDataLoadingStatus(false));
      dispatch(fillOffersList({offers: data}));
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();

    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);