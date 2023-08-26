import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { TOffer, TOfferDescription } from '../types/offer';
import { TReview } from '../types/review';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../const';
import {
  fillOffersList,
  setOffersDataLoadingStatus,
  setError, redirectToRoute,
  loadOfferById, loadNearbyOffers, loadFavorites,
  loadComments,
} from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

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

export const fetchOfferByIdAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOfferById',
  async (offerId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TOfferDescription>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadOfferById(data));
    } catch (error) {
      console.error('Error fetching offer by ID:', error);
      dispatch(setError('Failed to fetch the offer by its ID.'));
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  async (_, thunkAPI) => {
    setTimeout(
      () => thunkAPI.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
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
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, login);
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearbyOffers(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<TOffer[]>(APIRoute.Faforite);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadFavorites(data));
  },
);

export const fetchChangeStatusFavoriteAction = createAsyncThunk<TOffer, {status: number; id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchChangeStatusFavorite',
  async ({status, id}, {extra: api}) => {
    const {data} = await api.post<TOffer>(`${APIRoute.Faforite}/${id}/${status}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadComments(data));
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
