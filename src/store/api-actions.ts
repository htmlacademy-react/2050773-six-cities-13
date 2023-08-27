import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { TOffer, TOfferDescription } from '../types/offer';
import { TReview } from '../types/review';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute} from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<TOfferDescription, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOfferDescription>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<TOffer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<TReview[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  },
);

export const fetchSendCommentAction = createAsyncThunk<Comment | null, {rating: number; comment: FormDataEntryValue; id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSendComment',
  async ({rating, comment, id}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${id}`, {rating, comment});
    dispatch(fetchCommentsAction(id));
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffer[]>(APIRoute.Favorite);
    return data;
  },
);

export const fetchChangeStatusFavoriteAction = createAsyncThunk<TOffer, {status: number; id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchChangeStatusFavorite',
  async ({status, id}, {extra: api}) => {
    const {data} = await api.post<TOffer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {
    extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
dispatch: AppDispatch;
state: State;
extra: AxiosInstance;
}>(
  'user/login',
  async (login, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, login);
    saveToken(data.token);
    // saveUserEmail(data.email);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {
    extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    // dropUserEmail();
  },
);
