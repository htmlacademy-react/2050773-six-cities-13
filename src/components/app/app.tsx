import {Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import AuthorizationNav from '../authorization-header/authorization-header';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus, getAuthCheckedStatus } from '../../store/user-process/user-process.selector';
import { getOffersDataLoadingStatus } from '../../store/offers-process/offers-process.selector';
import { getOffers } from '../../store/offers-process/offers-process.selector';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const offers = useAppSelector(getOffers);


  if (!isAuthChecked || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<AuthorizationNav authorizationStatus={authorizationStatus} />}>
            <Route
              index element={
                <WelcomeScreen
                  offers={offers}
                />
              }
            />
            <Route element={<PrivateRoute authorizationStatus={authorizationStatus} />}>
              <Route
                element={<FavoritesScreen />}
                path={AppRoute.Favorites}
              />
            </Route>
            <Route
              path={`${AppRoute.Offer}:id`}
              element={<OfferScreen />}
            />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
          <Route path={AppRoute.Login} element={<LoginScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
